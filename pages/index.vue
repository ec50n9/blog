<script lang="ts" setup>
useHead({
  title: "ec50n9 的杂货铺",
});

const navList = useState("navList", () => [
  { name: "实验室", path: "/lab" },
  { name: "关于", path: "/about" },
]);

const articleList = useState<Article[]>("articleList", () => [
  {
    id: 1,
    title: "测试文章",
    content: "测试内容",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
]);
</script>

<template>
  <div>
    <p
      class="py-4 px-8 text-center leading-tight text-5xl font-bold font-stylish c-emerald-6"
    >
      👋 Hi there, welcome to My Blog!
    </p>

    <ul class="flex justify-center gap-3 px-4 text-sm c-slate-4">
      <li>最近更新: <span>2024-01-06</span></li>
    </ul>

    <AppNav class="mt-3 px-4" :nav-list="navList" />

    <div class="mt-5 px-4">
      <h2 class="text-2xl">🚀 近期动态</h2>
      <ArticleList class="mt-2 ml-3" :article-list="articleList" />
    </div>
  </div>
</template>

<style>
:root {
  color-scheme: light dark;
}
</style>
