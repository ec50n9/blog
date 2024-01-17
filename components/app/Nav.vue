<script lang="ts" setup>
defineProps<{
  navList: { title: string; path: string; name?: string }[];
}>();
</script>

<template>
  <ul class="flex items-center flex-wrap gap-3">
    <li
      v-for="item in navList"
      :key="item.path"
      p="x-4 y-1.5"
      rd-full
      bg="emerald-1 @dark:emerald-9"
      c="emerald-7 @dark:emerald-4"
    >
      <NuxtLink :to="item.path"
        ><span :view-transition-name="item.name">{{
          item.title
        }}</span></NuxtLink
      >
    </li>
  </ul>
</template>
