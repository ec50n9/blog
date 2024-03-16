const baseURL = "https://w04oy7.laf.run";

export const request = <T>(
  req: Parameters<typeof $fetch>[0],
  opts?: Parameters<typeof $fetch>[1]
) =>
  $fetch<Resp<T>>(baseURL + req, opts).then((res) => {
    if (res.code === 0) {
      return res.data;
    } else {
      throw new Error(res.message);
    }
  });
