<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import headerKk from '@/components/header-kk.vue';
  import footerKk from '@/components/footer-kk.vue';
</script>

<template>
  <div class="flex flex-col w-full">
    <header-kk />
    <div class="overflow-auto flex flex-1 py-2">
      <router-view />
    </div>
    <footer-kk />
  </div>
</template>
