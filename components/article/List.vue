<script lang="tsx" setup>
import type { ArticleListVO } from "~/api/article/types";

defineProps<{
  articleList: ArticleListVO[];
}>();

const currId = useState(() => "");

const gotoArticle = (id: string) => {
  currId.value = id;
  navigateTo(`/articles/${id}`);
};
</script>

<template>
  <ul flex="~ col gap-4">
    <li
      w="fit"
      p="x-4 y-2"
      self-end
      bg="blue-5 @dark:slate-8"
      text="white @dark:slate-3"
      rd-5
    >
      上班真累。。。。
    </li>
    <li
      w="fit"
      p="x-4 y-2"
      self-end
      bg="blue-5 @dark:slate-8"
      text="white @dark:slate-3"
      rd-5
    >
      上班真累。。。。<br />加油！
    </li>

    <ArticleItem
      v-for="item in articleList"
      :key="item._id"
      :article="item"
      :active="item._id === currId"
      @click="gotoArticle(item._id)"
    />
  </ul>
</template>
