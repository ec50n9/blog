export default defineNuxtRouteMiddleware((to) => {
  if (!document?.startViewTransition) return;

  // 禁用内置的Vue过渡效果
  to.meta.pageTransition = false;
  to.meta.layoutTransition = false;
});
