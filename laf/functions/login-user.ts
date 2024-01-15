import cloud from "@lafjs/cloud";
import { createHash } from "crypto";
import { fail, ok } from "./system_utils";

const db = cloud.mongo.db;

export default async function (ctx: FunctionContext) {
  const { username, password } = ctx.body;

  // 校验用户名和密码是否为空
  if (!username || !password) return fail("用户名或密码不能为空");

  const collection = db.collection("users");

  // 查找登录用户
  const user = await collection.findOne(
    {
      username,
      password: createHash("sha256").update(password).digest("hex"),
    },
    {
      projection: {
        password: 0,
      },
    }
  );

  // 校验用户
  if (user) {
    // 账号被锁定
    if (user.lock === 1) return fail("用户已被锁定，请联系管理员！");

    // 记录登录信息
    let query = {
      last_ip: ctx.headers["x-real-ip"],
      last_login_time: Date.now(),
    };
    await collection.updateOne({ _id: user._id }, { $set: query });

    // 生成 jwt token
    const payload = {
      uid: user._id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    };
    const access_token = cloud.getToken(payload);

    // 返回登录成功信息
    return ok({ access_token }, "登录成功");
  } else return fail("用户名或密码错误");
}
