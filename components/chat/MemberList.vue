<script lang="ts" setup>
import { NFlex } from "naive-ui";
import type { ChatMember } from "~/types/modules/chat";

defineProps<{
  currentMemberId?: ChatMember["id"];
  members: Array<ChatMember>;
}>();

const emit = defineEmits<{
  (e: "select-member", id: ChatMember["id"]): void;
}>();
</script>

<template>
  <NFlex bg-blue-50 shadow rd-5>
    <ChatMemberItem
      v-for="member in members"
      :key="member.id"
      :member="member"
      :active="member.id === currentMemberId"
      @click="() => emit('select-member', member.id)"
    />
  </NFlex>
</template>
