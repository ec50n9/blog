<script lang="ts" setup>
useHead({
  title: "关于 - ec50n9 的杂货铺",
});

console.log(useAppConfig());
</script>

<template>
  <section h-screen of-auto>
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="about">关于</span> ec50n9
    </h1>

    <div m-5>此页面将显示在 /about 路由。</div>
  </section>
</template>
