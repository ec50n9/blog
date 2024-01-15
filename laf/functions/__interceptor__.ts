import cloud from "@lafjs/cloud";
import cache from "@/memcache";
import { fail } from "@/system_utils";

const db = cloud.mongo.db;

/**
 * 获取配置信息
 * @param name 配置名称
 * @returns 配置值
 */
const getConfig = async (name: string): Promise<any> =>
  await db.collection("config").findOne({ name });

/**
 * 选择返回值
 * @param value 待校验的值
 * @param defaultValue 默认值
 * @returns
 */
const orDefault = <T>(value: T, defaultValue: T) =>
  value ? value : defaultValue;

export default async function (ctx: FunctionContext, next: Function) {
  // 获取 ip 黑名单
  let ipBlacklist = cache.get("ip-blacklist");
  if (!ipBlacklist) {
    ipBlacklist = orDefault<string[]>(
      (await getConfig("ip-blacklist")).value,
      []
    );
    cache.set("ip-blacklist", ipBlacklist);
  }
  console.log("current ip blacklist: ", ipBlacklist);

  // 获取 ip
  const ip = ctx.headers["x-forwarded-for"];
  console.log("current ip: ", ip);
  if (ipBlacklist.includes(ip)) return fail("您的 IP 地址已被限制访问！");

  // 获取 uid 黑名单
  let uidBlacklist = cache.get("uid-blacklist");
  if (!uidBlacklist) {
    uidBlacklist = orDefault<string[]>(
      (await getConfig("uid-blacklist")).value,
      []
    );
    cache.set("uid-blacklist", uidBlacklist);
  }
  console.log("current uid blacklist: ", uidBlacklist);

  // 需要登录的云函数
  if (ctx.__function_name.startsWith("u-")) {
    console.log("需要登录，当前用户信息: ", ctx.user);
    const { user } = ctx;
    if (!user) return fail("请先登录");

    if (uidBlacklist.includes(user.uid)) return fail("您的账号已被限制访问！");
  } else {
    console.log("无需登录");
  }

  return await next(ctx);
}
