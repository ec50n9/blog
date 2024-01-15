import cloud from '@lafjs/cloud'
import { ok, fail } from "@/system_utils"

const db = cloud.mongo.db

export default async function (ctx: FunctionContext) {
  const pageNo = ctx.query.pageNo ? +ctx.query.pageNo : 1
  const pageSize = ctx.query.pageSize ? +ctx.query.pageSize : 10

  const articles = await db.collection("article")
    .find({})
    .project({ content: 0 })
    .skip(pageSize * (pageNo - 1))
    .limit(pageSize)
    .toArray()

  return ok(articles, "获取成功")
}
