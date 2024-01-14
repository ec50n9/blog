<script lang="ts" setup></script>

<template>
  <div class="of-auto">
    <!-- 标题 -->
    <h1 m="t-6 l-5" text="3xl">
      <span view-transition-name="ui-floating-label-title">悬浮标签</span>
    </h1>

    <div m-5 flex="~ col gap-5">
      <div floating-label-wrapper>
        <input type="text" id="floating_filled" placeholder=" " floating-label-input="filled red" class="peer">
        <label for="floating_filled" floating-label-label="filled red">这是实心的</label>
      </div>

      <div floating-label-wrapper>
        <input type="text" id="floating_outlined" placeholder=" " floating-label-input="outlined" class="peer">
        <label for="floating_outlined" floating-label-label="outlined">这是空心的</label>
      </div>

      <div floating-label-wrapper>
        <input type="text" id="floating_standard" placeholder=" " floating-label-input="standard" class="peer">
        <label for="floating_standard" floating-label-label="standard">这是标准的</label>
      </div>
    </div>
  </div>
</template>
