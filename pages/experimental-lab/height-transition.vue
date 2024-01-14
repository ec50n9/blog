<script lang="ts" setup>
const expanded = useState(() => false);
const toggle = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <div
    class="h-screen w-full bg-gradient-to-rb from-blue-1 to-emerald-1 of-auto"
  >
    <div class="group w-fit mx-auto mt-20 rd-lg bg-white of-hidden">
      <div class="px-5 py-3 text-center">这个是 hover 展开</div>
      <div
        class="grid grid-rows-[0fr] transition-[grid-template-cols] ease-in-out duration-250 group-hover:grid-rows-[1fr]"
      >
        <div class="of-hidden">
          <!-- 实际内容 -->
          <div class="h-20 py-3 bg-pink-3">哈哈哈，藏这都让你给找着了</div>
        </div>
      </div>
    </div>

    <div class="w-fit mx-auto mt-20 rd-lg bg-white of-hidden" @click="toggle">
      <div class="px-5 py-3 text-center">这个是点击展开</div>
      <div
        class="grid transition-[grid-template-cols] ease-in-out duration-250"
        :class="[expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]']"
      >
        <div class="of-hidden">
          <!-- 实际内容 -->
          <div class="h-20 py-3 bg-pink-3">哈哈哈，藏这都让你给找着了</div>
        </div>
      </div>
    </div>
  </div>
</template>
