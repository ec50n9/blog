<script lang="ts" setup>
const props = defineProps<{
  article: ArticleListVO;
  currId: ArticleListVO["_id"];
}>();

const emit = defineEmits<{
  (e: "update:currId", id: string): void;
}>();

const gotoArticle = (id: string) => {
  emit("update:currId", id);
  navigateTo(`/articles/${id}`);
};
</script>

<template>
  <li
    relative
    p-3
    flex="~ col"
    bg-slate-1
    ring-blue-3
    active="bg-slate-2 ring-4 scale-95"
    rd-2xl
    :view-transition-name="currId === article._id ? 'article-bg' : ''"
  >
    <!-- 点击水波纹 -->
    <!-- <ClientOnly>
      <md-ripple z-1 />
    </ClientOnly> -->

    <div @click="gotoArticle(article._id)">
      <!-- 标题 -->
      <p w-fit text="xl emerald-6" font="semibold" cursor-pointer select-none>
        <span
          :view-transition-name="currId === article._id ? 'article-title' : ''"
          >{{ article.title }}</span
        >
      </p>

      <!-- 副标题 -->
      <p
        mt-1
        text="slate-4"
        select-none
        :view-transition-name="currId === article._id ? 'article-content' : ''"
      >
        {{ article.summary }}
      </p>

      <!-- 封面 -->
      <p>
        <img
          m="t-2 x-auto"
          w-full
          aspect-video
          object-cover
          rd-xl
          :src="article.cover"
          :view-transition-name="currId === article._id ? 'article-cover' : ''"
        />
      </p>
    </div>
  </li>
</template>
