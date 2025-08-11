<script setup lang="ts">
  import { supportedLocales } from '@/helpers/i18n';

  const locales = supportedLocales;

  const changeLocale = (event: any) => {
    localStorage.setItem('locale', event.target.value);
  };
</script>

<template>
  <div class="border-red-300 text-xl md:text-2xl text-white">
    <select
      v-model="$i18n.locale"
      class="outline-none"
      @change="changeLocale"
    >
      <option
        v-for="locale in locales"
        :key="locale.key"
        :value="locale.key"
        class="text-sm text-black"
      >
        {{ locale.value }}
      </option>
    </select>
  </div>
</template>
