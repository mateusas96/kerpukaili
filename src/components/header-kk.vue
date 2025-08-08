<script setup lang="ts">
  import languageSelect from './language-select.vue';
</script>

<template>
  <div class="flex bg-red-100 shadow-md items-center px-4">
    <div class="p-4 z-10 flex w-full text-xl sm:text-3xl font-semibold items-center justify-center">
      {{ $t('IT_IS_NOT_FUR_IT_IS_GLITTER_TEXT') }}
    </div>
    <language-select />
  </div>
</template>
