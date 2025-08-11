<script setup lang="ts">
  import { ref } from 'vue';
  import transitionExpand from './transition-expand.vue';

  const isOpen = ref(false);
</script>

<template>
  <div
    class="flex cursor-pointer"
    @click="isOpen = !isOpen"
  >
    <div class="flex w-full flex-col">
      <div
        class="flex justify-between items-center px-4 bg-red-200/50 hover:bg-red-300 p-2"
        :class="{
          'rounded-lg': !isOpen,
          'rounded-t-lg': isOpen,
        }"
      >
        <div class="flex flex-1 text-2xl md:text-3xl font-medium uppercase">
          <slot name="title" />
        </div>
        <div
          class="flex items-center transform duration-400"
          :class="{
            '-rotate-180': isOpen,
          }"
        >
          <fa-icon
            icon="fa-solid fa-chevron-down"
            class="w-[16px]! h-[16px]! md:w-[20px]! md:h-[20px]!"
          />
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
