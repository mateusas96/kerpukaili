<script setup lang="ts">
  import languageSelect from './language-select.vue';
</script>

<template>
  <div class="flex shadow-md bg-[url('/smile.webp')] bg-no-repeat bg-cover">
    <div class="flex justify-center bg-red-100/35 w-full">
      <div class="flex items-center px-4 w-full md:w-[700px] lg:w-[900px]">
        <div class="p-4 z-10 text-white flex w-full text-4xl sm:text-5xl justify-center">
          {{ $t('IT_IS_NOT_FUR_IT_IS_GLITTER_TEXT') }}
        </div>
        <language-select />
      </div>
    </div>
  </div>
</template>
