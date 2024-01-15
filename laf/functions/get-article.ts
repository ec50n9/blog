import cloud from '@lafjs/cloud'
import { ok } from "@/system_utils"

const db = cloud.mongo.db

export default async function (ctx: FunctionContext) {
  const _id = ctx.query.id

  const article = await db.collection('article')
    .findOne({ _id })

  return ok(article, "获取成功")
}
