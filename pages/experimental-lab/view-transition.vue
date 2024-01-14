<script lang="ts" setup>
import { useViewTransition } from "@/hooks/view";
const state = useState(() => false);

const handleClick = useViewTransition(() => {
  state.value = !state.value;
});
</script>

<template>
  <div
    h="screen"
    bg-gradient="to-rb from-blue-1 to-emerald-1"
    of-auto
    transition="clip-path ease-in-out duration-500"
  >
    <h1 w="fit" m="t-6 l-5" text="3xl emerald-6">
      <span view-transition-name="view-transition">视图过渡动画</span>
    </h1>
    <button
      btn-indigo
      :m="`x-auto ${state ? 't-50' : 't-30'}`"
      view-transition-name="magic"
      @click="handleClick"
    >
      神奇小蜗
    </button>
  </div>
</template>
