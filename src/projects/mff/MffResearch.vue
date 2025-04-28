<template>
  <div class="grid lg:grid-cols-2 gap-8">
    <ProcessCard :number="1" color="white">
      <template #title>Competitive analysis</template>

      Mapped the finance app landscape and identified a lack of engaging,
      habit-forming design.</ProcessCard
    >
    <ProcessCard :number="2" color="white">
      <template #title>User surveys & interviews</template>

      Engaged Reddit communities to uncover real financial struggles and test
      initial concepts.</ProcessCard
    >
    <ProcessCard :number="3" color="white" class="lg:col-span-2">
      <template #title>Sprint prioritization</template>

      Zeroed in on must-have functionality to maximize impact within the
      hackathon timeframe.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
