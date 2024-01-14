<script lang="ts" setup></script>

<template>
  <div class="of-auto">
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="ui-lab">UI 实验室</span>
    </h1>

    <!-- 开关提示 -->
    <div flex items-center m="5" p="x-5 y-3" bg="slate-1" rd-xl>
      <!-- 左边文本 -->
      <div grow>
        <div flex items-center text="md">
          <span inline-block mr-1>🔔</span>打开通知权限
        </div>
        <div text="sm slate-4">打开通知权限可以收到通知！</div>
      </div>
      <!-- 右边开关 -->
      <div shrink-0>
        <label class="toggle-wrapper">
          <input type="checkbox" value="" class="toggle-input peer" />
          <div class="toggle-bg"></div>
        </label>
      </div>
    </div>

    <!-- 带文本的开关 -->
    <div flex flex-wrap items-center gap-3 m-5>
      <label toggle-wrapper>
        <input type="checkbox" value="" toggle-input class="peer" />
        <div toggle-bg-emerald></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium">点击切换</span>
      </label>

      <label class="toggle-wrapper">
        <input type="checkbox" value="" class="toggle-input peer" disabled />
        <div class="toggle-bg-blue"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >禁用</span
        >
      </label>

      <label class="toggle-wrapper">
        <input
          type="checkbox"
          value=""
          class="toggle-input peer"
          checked
          disabled
        />
        <div class="toggle-bg-red"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >禁用</span
        >
      </label>
    </div>
  </div>
</template>
