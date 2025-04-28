<template>
  <div class="grid lg:grid-cols-2 gap-8">
    <ProcessCard :number="1" color="green">
      <template #title> Engaging Visuals</template>

      High-quality imagery that showcases trails, landscaped spaces, and real
      people enjoying them.</ProcessCard
    >
    <ProcessCard :number="2" color="green">
      <template #title>A Clear Service Breakdown</template>

      Concise, skimmable sections explaining exactly what New Root offers,
      without overwhelming detail.</ProcessCard
    >
    <ProcessCard :number="3" color="green">
      <template #title>Trust-Building Through Storytelling</template>

      A section dedicated to their passion for the outdoors—positioning them as
      not just service providers, but experts who genuinely care.</ProcessCard
    >
    <ProcessCard :number="4" color="green">
      <template #title>Consistent Calls-to-Action (CTAs)</template>

      No matter where users were on the page, they could easily reach
      out—whether for a quote, a consultation, or just more info.
    </ProcessCard>
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
