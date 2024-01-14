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
  <ul flex="~ col gap-2">
    <li
      v-for="item in articleList"
      :key="item._id"
      class="c-emerald-6 underline"
    >
      <div w-fit cursor-pointer @click="gotoArticle(item._id)">
        <span :view-transition-name="currId === item._id ? 'article-title' : ''"
          ># {{ item.title }}</span
        >
      </div>
    </li>
  </ul>
</template>
