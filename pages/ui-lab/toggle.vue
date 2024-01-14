<script lang="ts" setup></script>

<template>
  <div class="of-auto">
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="ui-toggle-title">开关</span>
    </h1>

    <!-- 带文本 -->
    <div flex="~ wrap" items-center gap-3 m-5>
      <label toggle-wrapper>
        <input type="checkbox" value="" toggle-input class="peer" />
        <div toggle-bg-emerald></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium"
          >带文本的开关</span
        >
      </label>
    </div>

    <!-- 禁用 -->
    <div flex flex-wrap items-center gap-3 m-5>
      <label toggle-wrapper>
        <input type="checkbox" value="" class="toggle-input peer" disabled />
        <div toggle-bg-blue></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium"
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
        <div toggle-bg-red></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium"
          >禁用</span
        >
      </label>
    </div>

    <!-- 尺寸 -->
    <div flex flex-wrap items-center gap-3 m-5>
      <label toggle-wrapper>
        <input type="checkbox" value="" toggle-input class="peer" checked />
        <div toggle="bg-indigo size-sm"></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium"
          >小号</span
        >
      </label>

      <label toggle-wrapper>
        <input type="checkbox" value="" toggle-input class="peer" checked />
        <div toggle="bg-indigo size-md"></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium"
          >中号</span
        >
      </label>

      <label toggle-wrapper>
        <input type="checkbox" value="" toggle-input class="peer" checked />
        <div toggle="bg-indigo size-lg"></div>
        <span ms-3 text="sm gray-9 dark:gray-3" font="medium"
          >大号</span
        >
      </label>
    </div>
  </div>
</template>
