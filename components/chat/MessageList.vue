<script lang="ts" setup>
import { NFlex, NAvatar, NElement, NText, NVirtualList } from "naive-ui";
import type { ChatMember, ChatMessage } from "~/types/modules/chat";

const props = defineProps<{
  messages: Array<ChatMessage>;
  members: Array<ChatMember>;
  meId: ChatMember["id"];
}>();

const memberMapper = computed(
  () => new Map(props.members.map((member) => [member.id, member]))
);
</script>

<template>
  <NFlex w-full vertical>
    <ChatMessageItem
      v-for="item in messages"
      :key="item.id"
      :message="item"
      :member="memberMapper.get(item.sender)!"
      :isMe="item.sender === meId"
    />
  </NFlex>
</template>
