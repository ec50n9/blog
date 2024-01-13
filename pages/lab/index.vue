<script lang="ts" setup>
useHead({
  title: "神奇小蜗实验室",
});

const navList = useState("lab-nav", () => [
  { name: "神奇文字背景", path: "/lab/magic-text-bg" },
  { name: "幽灵输入框", path: "/lab/ghost-input-text" },
  { name: "高度动画", path: "/lab/height-transition" },
  { name: "视图过渡动画", path: "/lab/view-transition" },
]);
</script>

<template>
  <div>
    <AppHeader title="神奇小蜗实验室" />
    <ul class="p-4">
      <li
        v-for="item in navList"
        :key="item.path"
        class="c-emerald-6 underline"
      >
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
