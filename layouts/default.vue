<script lang="ts" setup></script>

<template>
  <div
    min-h="screen"
    bg="@light:white @dark:black"
    text="@light:slate-7 @dark:slate-4"
  >
    <div container mx-auto>
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
