<script lang="ts" setup>
const container = ref<HTMLDivElement | null>(null);

onMounted(() => {
  container.value!.scrollTop =
    (container.value!.scrollHeight - window.innerHeight) / 2;
});
</script>

<template>
  <div ref="container" class="h-screen of-auto bg-orange-50">
    <div class="py-[50vh]">
      <h1 class="text-5xl text-center c-transparent">2024，万事可期</h1>
    </div>
  </div>
</template>

<style scoped>
h1 {
  background: linear-gradient(to bottom, #fe4e00 50%, transparent 50%) center
    center / 100vw 100vh fixed;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px #fe4e00;
}
</style>
