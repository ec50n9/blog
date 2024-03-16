<script lang="ts" setup>
import { NFlex, NElement, NInput, NButton, NH1 } from "naive-ui";
import type { ChatMember, ChatMessage } from "~/types/modules/chat";

definePageMeta({
  layout: "pure",
});

onMounted(() => {
  currentMember.value = members.value.find((member) => member.id === 1) || null;
});

const handleSelectMember = (id: number) => {
  currentMember.value =
    members.value.find((member) => member.id === id) || null;
};

const handleSendMessage = (content: string) => {
  const message: ChatMessage = {
    id: messages.value.length + 1,
    sender: currentMember.value?.id || 0,
    content,
    timestamp: new Date().getTime(),
  };

  messages.value.push(message);
};

const currentMember = useState<ChatMember | null>(
  "chat-current-member",
  () => null
);

const members = useState<ChatMember[]>("chat-members", () => [
  {
    id: 1,
    name: "Alice",
    avatar: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
  },
  {
    id: 2,
    name: "Bob",
    avatar: "https://avatars.githubusercontent.com/u/20943608?s=60&v=4",
  },
  {
    id: 3,
    name: "Charlie",
    avatar: "https://avatars.githubusercontent.com/u/46394163?s=60&v=4",
  },
]);

const messages = useState<ChatMessage[]>("chat-messages", () => [
  {
    id: 1,
    sender: 1,
    content: "Hello, world!",
    timestamp: new Date().getTime(),
  },
  {
    id: 2,
    sender: 2,
    content: "How are you?",
    timestamp: new Date().getTime(),
  },
  {
    id: 3,
    sender: 1,
    content: "I'm fine, thank you.",
    timestamp: new Date().getTime(),
  },
]);

const chatContainer = ref<HTMLDivElement>();
const scrollToBottom = () => {
  setTimeout(
    () =>
      chatContainer.value?.scrollTo({
        top: chatContainer.value.scrollHeight,
        behavior: "smooth",
      }),
    100
  );
};
</script>

<template>
  <div ref="chatContainer" tag="div" h-full flex flex-col of-auto vertical>
    <NH1 shrink-0 mb-0 px-3 pt-5>自言自语</NH1>

    <ChatMemberList
      class="sticky top-3 shrink-0 mx-3 p-3 z-1"
      :members="members"
      :current-member-id="currentMember?.id"
      @select-member="handleSelectMember"
    />

    <ChatMessageList
      class="p-3 grow"
      :messages="messages"
      :members="members"
      :me-id="currentMember?.id!"
    />

    <ChatInputBar
      class="sticky bottom-0 shrink-0 z-1"
      @send-message="handleSendMessage"
      @scorll-to-bottom="scrollToBottom"
    />
  </div>
</template>
