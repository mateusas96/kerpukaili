<script setup lang="ts">
  import scissorRain from '@/components/scissor-rain.vue';
  import accordion from '@/components/accordion.vue';
  import { computed } from 'vue';
  import { t } from '@/helpers/i18n';

  const services = computed(() => {
    return [
      {
        title: t('FULL_GROOMING_TEXT'),
      },
      {
        title: t('BATH_N_BRUSH_TEXT'),
      },
      {
        title: t('DESHEDDING_TEXT'),
      },
      {
        title: t('NAIL_TRIMMING_TEXT'),
      },
      {
        title: t('EAR_CLEANING_TEXT'),
      },
      {
        title: t('PAW_PAD_TRIM_TEXT'),
      },
      {
        title: t('SANITARY_TRIM_TEXT'),
      },
      {
        title: t('PUPPY_GROOMING_TEXT'),
      },
      {
        title: t('DE_MATTING_TEXT'),
      },
      {
        title: t('CREATIVE_GROOMING_TEXT'),
      },
    ];
  });
</script>

<template>
  <div class="flex flex-col flex-1 items-center">
    <scissor-rain />
    <div class="flex flex-col flex-1 items-center justify-center gap-8 w-full p-2 md:p-0 md:w-1/2">
      <div class="text-2xl font-semibold pt-4 text-center underline italic">
        {{ $t('REGISTER_YOUR_FUR_BACK_TO_BE_A_MODEL_TEXT') }}
      </div>
      <div class="flex flex-col gap-2 w-full justify-center">
        <accordion
          v-for="service in services"
          :key="service.title"
          :title="service.title"
        >
          <div class="flex flex-col gap-4">
            <div
              v-for="idx in Math.floor(Math.random() * 10)"
              :key="idx"
            >
              {{ idx }}
            </div>
          </div>
        </accordion>
      </div>
    </div>
  </div>
</template>
