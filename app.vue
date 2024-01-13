<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  color-scheme: dark;
}

/* 高斯模糊转场 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* 旋转转场 */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

@font-face {
  font-family: 'Caveat';
  src: url('~/assets/fonts/Caveat-VariableFont_wght.ttf');
}
</style>
