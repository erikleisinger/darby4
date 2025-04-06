<template>
  <div class="grid lg:grid-cols-2 gap-[40px]">
    <ProcessCard :number="1" color="green">
      <template #title>New Waitlist Support Section</template>

      A fresh, dedicated area offered self-guided mental health strategies,
      immediate crisis resources, and alternative support options. This ensured
      no one felt abandoned while waiting for care.</ProcessCard
    >
    <ProcessCard :number="2" color="green">
      <template #title>Clearer, More Engaging Content</template>

      The redesign streamlined the content, making information more digestible
      by incorporating photos of the centre to create familiarity, infographics
      that break down the counselling process into clear, simple steps, and
      videos from past CCC talks and workshops to build trust and showcase
      expertise.</ProcessCard
    >
    <ProcessCard :number="3" color="green" class="lg:col-span-2">
      <template #title>Event & Fundraising Integration</template>

      An unexpected win? CCC could now sell tickets for workshops and training
      sessions directly on their site, opening up a new revenue stream while
      expanding mental health education.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
