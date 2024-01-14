<script lang="ts" setup>
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
    <ArticleItem
      v-for="item in articleList"
      :key="item._id"
      :article="item"
      v-model:curr-id="currId"
    />
  </ul>
</template>
