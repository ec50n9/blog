import cloud from "@lafjs/cloud";
import { fail, ok } from "@/system_utils";

const db = cloud.mongo.db;

export default async function (ctx: FunctionContext) {
  const kingUsername = await db
    .collection("config")
    .findOne({ name: "king-username" });
  if (!kingUsername) return fail("King's username not found in config");

  const user = await db
    .collection("users")
    .findOne(
      { username: kingUsername.value },
      { projection: { _id: 0, nickname: 1, avatar: 1 } }
    );
  if (!user) return fail("King's user not found in users");

  return ok(user);
}
