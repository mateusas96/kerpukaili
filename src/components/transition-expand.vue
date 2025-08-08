<script lang="ts">
  // copied from with some tweaks https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
  export default {
    name: 'transition-expand',
    methods: {
      enter(element: any) {
        const width = getComputedStyle(element).width;

        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const height = getComputedStyle(element).height;

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;

        // Force repaint to make sure the
        // animation is triggered correctly.

        getComputedStyle(element).height;

        // Trigger the animation.
        // We use `nextTick` because we need
        // to make sure the browser has finished
        // painting after setting the `height`
        // to `0` in the line above.
        this.$nextTick(() => {
          element.style.height = height;
        });
      },
      afterEnter(element: any) {
        element.style.height = 'auto';
      },
      leave(element: any) {
        const height = getComputedStyle(element).height;

        element.style.height = height;

        // Force repaint to make sure the
        // animation is triggered correctly.

        getComputedStyle(element).height;

        this.$nextTick(() => {
          element.style.height = 0;
        });
      },
    },
  };
</script>
<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>
<style scoped>
  /* trick browser into hardware acceleration to minimize height calculation performance */
  * {
    will-change: height;
    backface-visibility: hidden;
  }
  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.4s ease;
    overflow: hidden;
  }

  .expand-enter-from,
  .expand-leave-to {
    height: 0;
  }
</style>
