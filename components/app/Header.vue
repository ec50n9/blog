<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div p="x-4 t-8">
    <h1 text="3xl">
      {{ title || "别来无恙！" }}
    </h1>
  </div>
</template>
