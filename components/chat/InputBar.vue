<script lang="ts" setup>
import { NConfigProvider, NInput, NButton, NFlex } from "naive-ui";

const emit = defineEmits<{
  (e: "send-message", content: string): void;
  (e: "scorll-to-bottom"): void;
}>();

const content = useState("chat-input-content", () => "");
const handleSend = () => {
  const contentValue = content.value.trim();
  if (contentValue) {
    emit("send-message", contentValue);
    content.value = "";
  }

  // 重新聚焦
  if (inputRef.value && inputFocused.value) inputRef.value.focus();
  emit("scorll-to-bottom");
};

const inputRef = ref<HTMLInputElement>();
const inputFocused = useState("chat-input-focused", () => false);
const updateInputFocused = (value: boolean) => {
  // 如果不延迟，会导致无法获取正确的焦点状态
  setTimeout(() => {
    inputFocused.value = value;
  }, 0);
};
watch(inputFocused, (value) => {
  if (value) emit("scorll-to-bottom");
});
</script>

<template>
  <NFlex
    class="p-3 bg-white b-t-1 b-t-solid b-t-slate-1"
    align="end"
    :wrap="false"
  >
    <NInput
      ref="inputRef"
      class="b-none"
      v-model:value="content"
      placeholder="输入信息"
      type="textarea"
      :autosize="{
        minRows: 1,
        maxRows: 5,
      }"
      round
      @focus="updateInputFocused(true)"
      @blur="updateInputFocused(false)"
    />
    <NButton type="info" round @click.prevent="handleSend">发送</NButton>
  </NFlex>
</template>
