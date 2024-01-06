<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

useHead({
  title: '关于 - ec50n9 的杂货铺',
})

console.log(useAppConfig())
</script>

<template>
  <section class="p-4">
    <p>此页面将显示在 /about 路由。</p>
  </section>
</template>
