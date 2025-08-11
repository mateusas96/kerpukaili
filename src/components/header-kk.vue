<script setup lang="ts">
  import languageSelect from './language-select.vue';
</script>

<template>
  <div class="flex shadow-md bg-[url('/smile.webp')] bg-no-repeat bg-cover">
    <div class="flex flex-1 items-center bg-red-100/35 px-4">
      <div class="p-4 z-10 text-white flex w-full text-4xl sm:text-5xl items-center justify-center">
        {{ $t('IT_IS_NOT_FUR_IT_IS_GLITTER_TEXT') }}
      </div>
      <language-select />
    </div>
  </div>
</template>
