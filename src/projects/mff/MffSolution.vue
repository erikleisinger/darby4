<template>
  <div class="grid lg:grid-cols-2 gap-[40px]">
    <ProcessCard :number="1" color="green">
      <template #title>Friendly, intuitive banking UI</template>

      A design that looked more like a productivity tool than a finance
      app—minimalist, modern, and welcoming.</ProcessCard
    >
    <ProcessCard :number="2" color="green">
      <template #title>Seamless connection to real accounts</template>

      Automatic tracking of savings and spending goals, keeping manual input to
      a minimum.</ProcessCard
    >
    <ProcessCard :number="3" color="green" class="lg:col-span-2">
      <template #title>Gamification was paramount</template>

      Gamification made the budgeting process much more accessible and friendly
      to an average user. It also kept their attention. In the research process,
      we found a deep user value in having more immediate gratification in
      finances, which is traditionally a long-term skill.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
