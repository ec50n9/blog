<script lang="ts" setup></script>

<template>
  <div
    min-h="screen"
    bg="@light:white @dark:black"
    text="@light:slate-7 @dark:slate-4"
  >
    <slot />
    <AppFooter />
  </div>
</template>
