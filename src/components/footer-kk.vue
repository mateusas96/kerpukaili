<script setup lang="ts">
  import { computed } from 'vue';

  const contactInfo = computed(() => {
    return [
      {
        icon: 'fa-solid fa-phone',
        text: '+37066424669',
        link: 'tel:+37066424669',
        target: '_self',
      },
      {
        icon: 'fa-solid fa-envelope',
        text: 'info@kerpukaili.lt',
        link: 'mailto:info@kerpukaili.lt',
        target: '_self',
      },
      {
        icon: 'fa-brands fa-instagram',
        text: '@kerpukaili',
        link: 'https://www.instagram.com/kerpukaili/',
        target: '_blank',
      },
    ];
  });
</script>

<template>
  <div class="flex z-10 flex-col pt-2 gap-1 w-full text-center pb-4">
    <div class="text-lg font-semibold">{{ $t('CONTACT_TEXT') }}</div>
    <div class="flex flex-col flex-1 items-center justify-center gap-1">
      <div class="flex gap-4">
        <div
          v-for="(item, index) in contactInfo"
          :key="index"
          class="flex gap-1 md:gap-2 items-end"
        >
          <fa-icon
            :icon="item.icon"
            class="w-[16px]! h-[16px]! md:w-[20px]! md:h-[20px]!"
          />
          <a
            class="underline decoration-red-500 text-red-500 font-semibold text-xs md:text-base"
            :href="item.link"
            :target="item.target"
            rel="noopener noreferrer"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="text-sm">&copy; 2025 {{ $t('COMPANY_NAME_TEXT') }}</div>
    </div>
  </div>
</template>
