<script lang="ts" setup>
import { NFlex, NAvatar, NText } from "naive-ui";
import type { ChatMember } from "~/types/modules/chat";

withDefaults(
  defineProps<{
    member: ChatMember;
    active?: boolean;
  }>(),
  {
    active: true,
    textClass: "",
  }
);
</script>

<template>
  <NFlex vertical align="center">
    <NAvatar
      :class="[{ 'outline outline-3 outline-blue-3': active }]"
      :src="member.avatar"
      size="large"
      round
    />
    <NText :class="['px-2 text-xs font-medium', { 'rd-full bg-blue-5 c-white': active }]">{{
      member.name
    }}</NText>
  </NFlex>
</template>
