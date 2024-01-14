<script lang="ts" setup></script>

<template>
  <div class="of-auto">
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="ui-kbd-title">键盘文本</span>
    </h1>

    <div m="x-5 t-5" flex flex-col gap-3>
      <p>尝试点击一下 <span kbd>hello</span> 试试看呢</p>
      <p>
        很好，现在试试 <span kbd>Shift</span> 或 <span kbd>Tab</span> 试试看呢
      </p>
      <p>
        当然，还可以显示svg小图标，比如
        <span kbd inline-flex>
          <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path
              d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"
            />
          </svg>
          <span class="sr-only">Arrow key left</span>
        </span>
        和
        <span kbd inline-flex>
          <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path
              d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"
            />
          </svg>
          <span class="sr-only">Arrow key right</span>
        </span>
      </p>
    </div>
  </div>
</template>
