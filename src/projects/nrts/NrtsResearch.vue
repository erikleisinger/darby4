<template>
  <div class="grid lg:grid-cols-2 gap-[40px]">
    <ProcessCard :number="1" color="white">
      <template #title>Visual Storytelling</template>

      Show families actually using the outdoor spaces New Root
      creates.</ProcessCard
    >
    <ProcessCard :number="2" color="white">
      <template #title>Expertise & Craftsmanship</template>

      Highlight their deep knowledge of trail-building and high-end
      landscaping.</ProcessCard
    >
    <ProcessCard :number="3" color="white" class="lg:col-span-2">
      <template #title>Clear, Actionable Messaging</template>

      Ensure users quickly understand what they do and how to get
      started.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
