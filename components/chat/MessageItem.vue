<script lang="ts" setup>
import { NFlex, NAvatar, NElement, NText, NVirtualList } from "naive-ui";
import type { ChatMember as message, ChatMessage } from "~/types/modules/chat";

withDefaults(
  defineProps<{
    message: ChatMessage;
    member: message;
    isMe?: boolean;
  }>(),
  {
    isMe: false,
  }
);

const avatarPlaceholder = "https://via.placeholder.com/50x50";
</script>

<template>
  <NElement class="flex gap-3" :class="[{ 'flex-row-reverse': isMe }]">
    <NAvatar size="medium" round :src="member.avatar || avatarPlaceholder" />
    <NElement
      tag="div"
      px-4
      py-2
      bg-blue-1
      rd-3
      font-medium
      break-words
      :class="['max-w-3/4', isMe ? 'bg-blue-5 c-white' : 'bg-slate-1 c-slate-7']"
      >{{ message.content }}</NElement
    >
  </NElement>
</template>
