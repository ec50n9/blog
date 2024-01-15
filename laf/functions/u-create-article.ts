import cloud from "@lafjs/cloud";
import { ArticleCreateVO, ArticleInsertDTO } from "@/article_types";
import { fail, ok } from "@/system_utils";
import { JwtUserInfo } from "@/common_types";

const db = cloud.mongo.db;

export default async function (ctx: FunctionContext) {
  const { uid } = ctx.user as JwtUserInfo;

  const articleCreateVO = ctx.body as ArticleCreateVO;

  if (!articleCreateVO.title) return fail("标题不能为空");
  if (!articleCreateVO.tags) articleCreateVO.tags = [];

  const insertDTO: ArticleInsertDTO = {
    ...articleCreateVO,
    views: 0,
    created_by: uid,
    created_time: Date.now(),
  };

  const ret = await db.collection("article").insertOne(insertDTO);

  if (ret.insertedId) return ok(ret.insertedId, "创建成功");
  return fail("创建失败");
}
