import cloud from "@lafjs/cloud";
import { JwtUserInfo } from "@/common_types";
import { ok, fail } from "@/system_utils";
import { ObjectId } from "mongodb";

const db = cloud.mongo.db;

export default async function (ctx: FunctionContext) {
  const { id: articleId } = ctx.body;
  if (!articleId) return fail("请传入文章 ID");

  // 获取用户信息 构造删除条件
  const { uid, is_admin } = ctx.user as JwtUserInfo;
  const delObj: Record<string, any> = { _id: new ObjectId(articleId) };
  if (!is_admin) delObj.created_by = uid;

  const ret = await db.collection("article").deleteOne(delObj);

  if (ret.deletedCount) return ok(ret.deletedCount, "删除成功");
  return fail("删除失败");
}
