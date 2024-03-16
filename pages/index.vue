<script lang="ts" setup>
import { listArticles } from "~/api/article";
import { getKingUserInfo } from "~/api/user";
import type { KingUserInfo } from "~/api/user/types";

useHead({
  title: "ec50n9 的杂货铺",
});

const navList = useState("navList", () => [
  { title: "小蜗实验室", path: "/experimental-lab", name: "experimental-lab" },
  { title: "UI 实验室", path: "/ui-lab", name: "ui-lab" },
  { title: "关于", path: "/about", name: "about" },
]);

/** 文章列表分页 */
const pageParams = useState(() => {
  return {
    pageNo: 1,
    pageSize: 10,
  };
});

const { data: articles } = await listArticles(pageParams.value);

const kingUserInfo = useState<KingUserInfo | null>(
  "king-user-info",
  () => null
);
if (!kingUserInfo.value) kingUserInfo.value = await getKingUserInfo();
</script>

<template>
  <div>
    <p pt-10>
      <img
        mx-auto
        size="28"
        rd-full
        style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px"
        :src="kingUserInfo?.avatar"
        :alt="kingUserInfo?.nickname"
      />
    </p>

    <p
      class="py-4 px-8 text-center leading-tight text-4xl font-bold font-stylish c-emerald-6"
    >
      👋 Hi, I'm {{ kingUserInfo?.nickname }},<br />
      a frontend developer.
    </p>

    <ul class="flex justify-center gap-3 px-4 text-sm c-slate-4">
      <li>最近更新: <span>2024-01-06</span></li>
    </ul>

    <AppNav m="x-4 t-3" :nav-list="navList" />

    <div m="x-4 y-5">
      <h2 class="text-2xl">🚀 近期动态</h2>
      <ArticleList class="mt-2" :article-list="articles" />
    </div>
  </div>
</template>
