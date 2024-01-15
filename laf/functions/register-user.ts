import cloud from "@lafjs/cloud";
import { createHash } from "crypto";
import { ok, fail } from "@/system_utils";

const db = cloud.mongo.db;

export default async function (ctx: FunctionContext) {
  const { username, nickname, email, password } = ctx.body;

  // 校验用户名、手机号、邮箱是否为空
  if (!username && !email) return fail("用户名/手机号/邮箱不能为空");

  // 校验密码是否为空
  if (!password || password.length < 6) return fail("密码不能小于6位！");

  const encryptedPassword = createHash("sha256").update(password).digest("hex");

  const collection = db.collection("users");

  // 查询用户是否存在
  const data = await collection.findOne({
    username,
  });
  if (data) return fail("用户名已经存在！");

  // 开始注册用户
  const { insertedId: id } = await collection.insertOne({
    username,
    email,
    nickname: nickname || username,
    password: encryptedPassword,
    create_time: Date.now(),
  });
  return ok(id, "注册成功");
}
