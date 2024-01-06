<script lang="ts" setup>
useHead({
  title: "ec50n9 的杂货铺",
});

const navList = useState("navList", () => [
  { name: "实验室", path: "/lab" },
  { name: "关于", path: "/about" },
]);
</script>

<template>
  <div>
    <AppHeader title="ec50n9 的杂货铺" />
    <ul class="p-4 flex items-center flex-wrap gap-3">
      <li
        v-for="item in navList"
        :key="item.path"
        class="px-4 py-2 rd-full bg-blue-50 c-blue-5"
      >
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
