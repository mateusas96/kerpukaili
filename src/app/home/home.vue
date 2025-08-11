<script setup lang="ts">
  import scissorRain from '@/components/scissor-rain.vue';
  import accordion from '@/components/accordion.vue';
  import { computed } from 'vue';
  import { t } from '@/helpers/i18n';

  const services = computed(() => {
    return [
      {
        title: t('FULL_GROOMING_TEXT'),
        description: t('FULL_GROOMING_DESCRIPTION_TEXT'),
        price: '30€',
      },
      {
        title: t('TRIMMING_TEXT'),
        description: t('TRIMMING_DESCRIPTION_TEXT'),
        price: '35€',
      },
      {
        title: t('BATH_N_BRUSH_TEXT'),
        description: t('BATH_N_BRUSH_DESCRIPTION_TEXT'),
        price: '20€',
      },
      {
        title: t('DESHEDDING_TEXT'),
        description: t('DESHEDDING_DESCRIPTION_TEXT'),
        price: '25€',
      },
      {
        title: t('NAIL_TRIMMING_TEXT'),
        description: t('NAIL_TRIMMING_DESCRIPTION_TEXT'),
        price: '15€',
      },
      {
        title: t('EAR_CLEANING_TEXT'),
        description: t('EAR_CLEANING_DESCRIPTION_TEXT'),
        price: '10€',
      },
      {
        title: t('PAW_PAD_TRIM_TEXT'),
        description: t('PAW_PAD_TRIM_DESCRIPTION_TEXT'),
        price: '10€',
      },
      {
        title: t('SANITARY_TRIM_TEXT'),
        description: t('SANITARY_TRIM_DESCRIPTION_TEXT'),
        price: '15€',
      },
      {
        title: t('PUPPY_GROOMING_TEXT'),
        description: t('PUPPY_GROOMING_DESCRIPTION_TEXT'),
        price: '20€',
      },
      {
        title: t('DE_MATTING_TEXT'),
        description: t('DE_MATTING_DESCRIPTION_TEXT'),
        price: '25€',
      },
      {
        title: t('CREATIVE_GROOMING_TEXT'),
        description: t('CREATIVE_GROOMING_DESCRIPTION_TEXT'),
        price: '30€',
      },
    ];
  });
</script>

<template>
  <div class="flex flex-col flex-1 items-center">
    <scissor-rain />
    <div class="flex flex-col flex-1 items-center justify-center gap-8 w-full p-2 md:w-[700px] lg:w-[900px]">
      <div class="text-4xl pt-4 text-center italic">
        {{ $t('REGISTER_YOUR_FUR_BACK_TO_BE_A_MODEL_TEXT') }}
      </div>
      <div class="flex flex-col gap-2 w-full justify-center">
        <accordion
          v-for="service in services"
          :key="service.title"
        >
          <template #title>
            <div class="flex flex-1 justify-between pr-4 items-center">
              <div>{{ service.title }}</div>
              <div>{{ service.price }}</div>
            </div>
          </template>
          <div class="text-xl md:text-2xl p-4 whitespace-pre-line">{{ service.description }}</div>
        </accordion>
      </div>
      <div class="text-xl md:text-2xl text-center">
        {{ $t('REGISTER_YOUR_FUR_BACK_TO_BE_A_MODEL_DESCRIPTION_TEXT') }}
      </div>
    </div>
  </div>
</template>
