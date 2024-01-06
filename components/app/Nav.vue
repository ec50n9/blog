<script lang="ts" setup>
defineProps<{
  navList: { name: string; path: string }[]
}>()
</script>

<template>
  <ul class="flex items-center flex-wrap gap-3">
    <li
      v-for="item in navList"
      :key="item.path"
      class="px-4 py-1.5 rd-full bg-emerald-100 c-emerald-7"
    >
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>
