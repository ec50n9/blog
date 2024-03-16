<script lang="ts" setup></script>

<template>
  <div
    h="screen"
    bg="@light:white @dark:black"
    text="@light:slate-7 @dark:slate-4"
    of-auto
  >
    <div h-full container mx-auto>
      <slot />
    </div>
  </div>
</template>
