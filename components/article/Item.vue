<script lang="ts" setup>
import type { ArticleListVO } from "~/api/article/types";

defineProps<{
  article: ArticleListVO;
  active: boolean;
}>();

const emit = defineEmits<{
  (e: "update:currId", id: string): void;
}>();
</script>

<template>
  <li
    relative
    p-3
    flex="~ col"
    bg="slate-1 @dark:slate-9"
    ring-blue-3
    active="bg-slate-2 @dark:bg-slate-8 ring-3"
    rd-2xl
    :view-transition-name="active ? 'article-bg' : ''"
  >
    <div>
      <!-- 标题 -->
      <p w-fit text="xl emerald-6" font="semibold" cursor-pointer select-none>
        <span :view-transition-name="active ? 'article-title' : ''">{{
          article.title
        }}</span>
      </p>

      <!-- 副标题 -->
      <p
        mt-1
        text="slate-4"
        select-none
        :view-transition-name="active ? 'article-content' : ''"
      >
        {{ article.summary }}
      </p>

      <!-- 封面 -->
      <div mt-2 grid="~ cols-3 gap-2">
        <img
          aspect-square
          object-cover
          rd-xl
          :src="article.cover"
          :view-transition-name="active ? 'article-cover' : ''"
        />
      </div>
    </div>
  </li>
</template>
