<script lang="ts" setup>
defineProps<{
  articleList: ArticleListVO[];
}>();

const currId = useState(() => "");
const gotoArticle = (id: string) => {
  currId.value = id;
  navigateTo(`/articles/${id}`);
};
</script>

<template>
  <ul flex="~ col gap-4">
    <li v-for="item in articleList" :key="item._id" p-3 bg-slate-1 rd-2xl :view-transition-name="currId === item._id ? 'article-bg' : ''">
      <div pt-1 flex="~ col">
        <!-- 标题 -->
        <p
          w-fit
          text="xl emerald-6"
          font="semibold"
          cursor-pointer
          @click="gotoArticle(item._id)"
        >
          <span
            :view-transition-name="currId === item._id ? 'article-title' : ''"
            >{{ item.title }}</span
          >
        </p>
        <!-- 副标题 -->
        <p
          mt-1
          text="slate-4"
          :view-transition-name="currId === item._id ? 'article-content' : ''"
        >
          {{ item.summary }}
        </p>
        <!-- 封面 -->
        <p>
          <img
            m="t-2 x-auto"
            w-full
            aspect-video
            object-cover
            rd-xl
            :src="item.cover"
            :view-transition-name="currId === item._id ? 'article-cover' : ''"
          />
        </p>
      </div>
    </li>
  </ul>
</template>
