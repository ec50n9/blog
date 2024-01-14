<script lang="ts" setup>
useHead({
  title: "神奇小蜗实验室",
});

const navList = useState(() => [
  { title: "神奇文字背景", path: "/experimental-lab/magic-text-bg" },
  { title: "幽灵输入框", path: "/experimental-lab/ghost-input-text" },
  { title: "高度动画", path: "/experimental-lab/height-transition" },
  {
    title: "视图过渡动画",
    path: "/experimental-lab/view-transition",
    name: "view-transition",
  },
]);
</script>

<template>
  <div>
    <div p="x-4 t-8">
      <h1 text="3xl">
        <span view-transition-name="magic">神奇小蜗</span
        ><span view-transition-name="experimental-lab">实验室</span>
      </h1>
    </div>
    <ul class="p-4">
      <li
        v-for="item in navList"
        :key="item.path"
        class="c-emerald-6 underline"
      >
        <NuxtLink :to="item.path"
          ><span :view-transition-name="item.name">{{
            item.title
          }}</span></NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
