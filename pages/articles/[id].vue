<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="p-4">
    {{ route.params.id }}
  </div>
</template>
