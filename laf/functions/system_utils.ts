import { JsonResult } from '@/system_types'

// 成功返回值
export function ok(
  data: object | any | null,
  msg: string = 'ok',
  code: number = 0
): JsonResult {
  return {
    code: code,
    msg: msg,
    data: data
  }
}
// 失败返回值
export function fail(msg: string = 'fail', code: number = -1): JsonResult {
  return {
    code: code,
    msg: msg,
    data: null
  }
}
