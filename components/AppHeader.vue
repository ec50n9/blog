<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="px-4 pt-8">
    <h1 class="text-3xl c-slate-8">{{ title || "别来无恙！" }}</h1>
  </div>
</template>
