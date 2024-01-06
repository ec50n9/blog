<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="px-4 pt-8">
    <h1 class="text-4xl c-blue-5">{{ title || "别来无恙！" }}</h1>
  </div>
</template>
