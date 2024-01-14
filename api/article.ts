export const listArticles = (params: PageParams) =>
  $fetch<Resp<ArticleListVO[]>>("https://w04oy7.laf.run/list-articles", {
    method: "GET",
    query: {
      ...params,
    },
  });

export const getArticle = (id: string) =>
  $fetch<Resp<ArticleDetailVO>>("https://w04oy7.laf.run/get-article", {
    method: "GET",
    query: { id },
  });
