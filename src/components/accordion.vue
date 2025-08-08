<script setup lang="ts">
  import { computed, ref } from 'vue';
  import transitionExpand from './transition-expand.vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const isOpen = ref(false);

  const icon = computed(() => {
    return isOpen.value ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  });
</script>

<template>
  <div
    class="flex cursor-pointer"
    @click="isOpen = !isOpen"
  >
    <div class="flex w-full flex-col">
      <div
        class="flex justify-between items-center px-4 bg-red-200 hover:bg-red-300 p-2"
        :class="{
          'rounded-lg': !isOpen,
          'rounded-t-lg': isOpen,
        }"
      >
        <div class="text-lg font-semibold uppercase">{{ props.title }}</div>
        <div
          class="transform duration-400"
          :class="{
            '-rotate-180': isOpen,
          }"
        >
          <fa-icon icon="fa-solid fa-chevron-down" />
        </div>
      </div>
      <transition-expand>
        <div
          v-if="isOpen"
          class="border-t-0 border border-red-200 bg-red-50/50 rounded-b-lg"
        >
          <div class="p-2">
            <slot />
          </div>
        </div>
      </transition-expand>
    </div>
  </div>
</template>
