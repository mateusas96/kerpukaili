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
      {
        icon: 'fa-solid fa-location-dot',
        text: 'Laisvės pr. 115A, Vilnius',
        link: 'https://maps.app.goo.gl/8oik6MUfqtpvoHk86',
        target: '_blank',
      },
    ];
  });
</script>

<template>
  <div class="flex z-10 flex-col pt-2 px-4 md:gap-1 w-full text-center pb-4">
    <div class="text-2xl pb-2 md:pb-0">{{ $t('CONTACT_TEXT') }}</div>
    <div class="flex flex-col flex-1 items-center justify-center md:gap-1">
      <div class="flex justify-center flex-wrap gap-4">
        <div
          v-for="(item, index) in contactInfo"
          :key="index"
          class="flex gap-1 md:gap-2 items-center -my-2 md:my-0"
        >
          <fa-icon
            :icon="item.icon"
            class="w-[16px]! h-[16px]! md:w-[20px]! md:h-[20px]!"
          />
          <a
            class="text-red-500 text-lg md:text-xl"
            :href="item.link"
            :target="item.target"
            rel="noopener noreferrer"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="text-xl pt-2 md:pt-0">&copy; 2025 {{ $t('COMPANY_NAME_TEXT') }}</div>
    </div>
  </div>
</template>
