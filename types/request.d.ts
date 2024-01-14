interface Resp<T = any> {
  data: T;
  message: string;
  code: number;
}

interface PageParams {
  pageNo: number;
  pageSize: number;
}
