<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  const container = ref(null) as any;
  let intervalId: number | undefined;

  function createScissor() {
    const scissor = document.createElement('div');
    const animation = Math.round(Math.random()) ? 'animate-fall' : 'animate-fall-backwards';
    scissor.textContent = '✂️';
    scissor.className = `absolute select-none top-0 pointer-events-none duration-[5s] ${animation}`;

    scissor.style.left = `${Math.random() * window.innerWidth}px`;
    scissor.style.fontSize = `${15 + Math.random() * 20}px`;

    if (container.value) container.value.appendChild(scissor);

    setTimeout(() => scissor.remove(), 5000);
  }

  onMounted(() => {
    intervalId = setInterval(createScissor, 200);
  });

  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
</script>

<template>
  <div
    ref="container"
    class="fixed inset-0 w-screen h-screen pointer-events-none bg-red-100 -z-10 overflow-hidden"
  />
</template>
