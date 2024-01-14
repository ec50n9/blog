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
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="ui-collapse-title">折叠面板</span>
    </h1>

    <div m-5>
      <!-- 点击展开 -->
      <div class="w-fit mx-auto mt-20 rd-lg bg-white of-hidden" @click="toggle">
        <div class="px-5 py-3 text-center">这个是点击展开</div>
        <div :collapse="`~ ${expanded ? 'expanded' : ''}`">
          <div class="of-hidden">
            <!-- 实际内容 -->
            <div class="h-20 p-3 bg-slate-1">哈哈哈，藏这都让你给找着了</div>
          </div>
        </div>
      </div>

      <!-- hover 展开 -->
      <div class="group w-fit mx-auto mt-20 rd-lg bg-white of-hidden">
        <div class="px-5 py-3 text-center">这个是 hover 展开</div>
        <div
          class="collapse group-hover:collapse-expanded"
        >
          <div class="of-hidden">
            <!-- 实际内容 -->
            <div class="h-20 p-3 bg-slate-1">得点一下其他地方我才能收起来</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
