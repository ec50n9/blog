<script lang="ts" setup>
useHead({
  title: "UI 实验室 - ec50n9",
});

const navList = useState(() => [
  { title: "开关", path: "/ui-lab/toggle", name: "ui-toggle-title" },
  { title: "键盘文本", path: "/ui-lab/kbd", name: "ui-kbd-title" },
  {
    title: "悬浮标签",
    path: "/ui-lab/floating-label",
    name: "ui-floating-label-title",
  },
  { title: "折叠面板", path: "/ui-lab/collapse", name: "ui-collapse-title" },
]);
</script>

<template>
  <div class="min-h-screen of-auto">
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="ui-lab">UI 实验室</span>
    </h1>

    <!-- 开关提示 -->
    <div flex="~ items-center gap-3" m="5" p="x-5 y-3" bg="slate-1 @dark:slate-9" rd-xl>
      <!-- 左边文本 -->
      <div grow>
        <div flex items-center text="md">
          <span inline-block mr-1>🔔</span>一个开关
        </div>
        <div text="sm slate-4">没什么用，但是会浪费你几秒钟来阅读这句话。</div>
      </div>
      <!-- 右边开关 -->
      <div shrink-0>
        <label class="toggle-wrapper">
          <input type="checkbox" value="" class="toggle-input peer" />
          <div class="toggle-bg"></div>
        </label>
      </div>
    </div>

    <ul m="x-5" flex="~ wrap gap-5">
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
