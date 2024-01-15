import cloud from "@lafjs/cloud";
import cache from "@/memcache";
import { fail } from "@/system_utils";

const db = cloud.mongo.db;

export default async function (ctx: FunctionContext, next: Function) {
  // 获取 ip 黑名单
  let ipBlacklist = cache.get("ip-blacklist");
  if (!ipBlacklist) {
    const configData = await db
      .collection("config")
      .findOne({ name: "ip-blacklist" });
    ipBlacklist = configData?.value || [];
    cache.set("ip-blacklist", ipBlacklist);
  }
  console.log("current ip blacklist: ", ipBlacklist);

  // 获取 ip
  const ip = ctx.headers["x-forwarded-for"];
  console.log("current ip: ", ip);
  if (ipBlacklist.includes(ip)) return fail("您的 IP 地址已被限制访问！");

  return await next(ctx);
}
