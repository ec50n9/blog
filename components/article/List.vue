<script lang="ts" setup>
defineProps<{
  articleList: Article[]
}>()
</script>

<template>
  <ul>
    <li v-for="item in articleList" :key="item.id" class="c-emerald-7 underline">
      <NuxtLink :to="`/articles/${item.id}`">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>
