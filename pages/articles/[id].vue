<script lang="ts" setup>
import showdown from "showdown";
import { getArticle } from "~/api/article";
const route = useRoute();

const articleId = route.params.id as string;
const { data: article } = await getArticle(articleId);

const converter = new showdown.Converter({
  emoji: true,
  tasklists: true,
});

const mdContent = article.content.replaceAll("\\n", "\n");
const html = converter.makeHtml(mdContent);
</script>

<template>
  <div h-screen of-auto>
    <h1 m="t-8 x-4" text-3xl font-bold>
      <span view-transition-name="article-title">{{ article.title }}</span>
    </h1>
    <article m="t-5 x-4" text-base prose prose-slate xl="text-xl" v-dompurify-html="html">
      <div>加载中...</div>
    </article>
  </div>
</template>
