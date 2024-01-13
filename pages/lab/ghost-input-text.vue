<script lang="ts" setup>
const value = useState(() => "");
const suggestion = useState(() => "");
const suggestions = useState(() => ["我是ec50n9", "你是小菜鸡"]);

const getSuggestions = (val: string) =>
  suggestions.value.find((item) => item.includes(val)) ??
  val + "啊嗷哦o胡言乱语";

watch(value, (val) => {
  suggestion.value = val ? getSuggestions(val) : "";
});

const handleTab = () => {
  const target = suggestions.value.find((item) => item.includes(value.value));
  if (!target) return;
  suggestion.value = target;
};
</script>

<template>
  <div
    class="h-screen w-full bg-gradient-to-rb from-sky-100 to-emerald-100 of-auto"
  >
    <div class="w-fit mx-auto mt-20">
      <label class="relative block">
        <input
          class="max-w-58 px-4 py-2 rd-3 bg-white b b-1 b-slate-3 placeholder-slate-4 focus:outline-none focus:b-blue-5 focus:ring-1 focus:ring-blue-5"
          v-model="value"
          @keydown.tab.prevent="handleTab"
          placeholder="快来问问神奇蜗牛叭"
        />
        <div
          class="absolute w-full h-full left-0 top-0 px-4 py-2 b b-transparent opacity-30"
        >
          {{ suggestion }}
        </div>
      </label>
    </div>
  </div>
</template>
