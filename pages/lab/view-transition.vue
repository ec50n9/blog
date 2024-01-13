<script lang="ts" setup>
const state = useState(() => false);
</script>

<template>
  <div
    class="from-blue-1 to-emerald-1"
    h="screen"
    bg="gradient-to-rb from-blue-1 to-emerald-1"
    of-auto
    transition="clip-path ease-in-out duration-500"
    :style="{
      'clip-path': state ? 'circle(105% at 50% 21%)' : 'circle(10% at 50% 21%)',
    }"
  >
    <button btn-indigo m="x-auto t-30" @click="state = !state">你好</button>
  </div>
</template>

<style>
@keyframes clip {
  from {
    clip-path: circle(0% at 50% 21%);
  }
  to {
    clip-path: circle(120% at 50% 21%);
  }
}
</style>
