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
  <div bg-slate-1 view-transition-name="article-bg">
    <h1 m="x-4" p="t-8" text="4xl emerald-6" font="semibold">
      <span view-transition-name="article-title">{{ article.title }}</span>
    </h1>
    <!-- 封面 -->
    <p m="x-4">
      <img
        m="y-5 x-auto"
        object-cover
        rd-xl
        :src="article.cover"
        view-transition-name="article-cover"
      />
    </p>
    <article
      m="t-5 x-4"
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
