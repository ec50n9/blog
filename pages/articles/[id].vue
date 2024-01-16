<script lang="ts" setup>
import showdown from "showdown";
import { getArticle } from "~/api/article";
const route = useRoute();

const articleId = route.params.id as string;
const { data: article } = await getArticle(articleId);

useHead({
  title: article.title,
});

const converter = new showdown.Converter({
  emoji: true,
  tasklists: true,
});

const mdContent = article.content.replaceAll("\\n", "\n");
const html = converter.makeHtml(mdContent);
</script>

<template>
  <div p="x-5 y-5" bg-slate-50 view-transition-name="article-bg">
    <!-- 封面 -->
    <img
      block
      object-cover
      rd-xl
      style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;"
      :src="article.cover"
      view-transition-name="article-cover"
    />
    <!-- 标题 -->
    <h1 p="t-10" text="4xl emerald-6" font="semibold">
      <span view-transition-name="article-title">{{ article.title }}</span>
    </h1>
    <!-- 内容 -->
    <article
      m="t-5"
      p="b-5"
      text-base
      prose
      prose-slate
      xl="text-xl"
      view-transition-name="article-content"
      v-dompurify-html="html"
    >
      <div>加载中...</div>
    </article>
  </div>
</template>
