<template>
  <div class="grid lg:grid-cols-2 gap-8">
    <ProcessCard :number="1" color="white">
      <template #title>Waitlisted clients needed dedicated support. g</template>

      A resource hub with self-help strategies, crisis contacts, and alternative
      mental health services became a must-have.</ProcessCard
    >
    <ProcessCard :number="2" color="white">
      <template #title>Visuals mattered. </template>

      Infographics, photos, and video content would make the centre feel
      approachable and simplify complex processes.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
