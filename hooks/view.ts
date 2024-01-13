export const useViewTransition = (action: () => void) => () => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      action();
    });
  } else {
    action();
  }
};
