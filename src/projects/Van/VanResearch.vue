<template>
  <div class="grid lg:grid-cols-2 gap-8">
    <ProcessCard :number="1" color="white">
      <template #title>Card Sorting & IA Testing</template>

      Organized overwhelming content into a clear, user-friendly
      structure.</ProcessCard
    >
    <ProcessCard :number="2" color="white">
      <template #title>Guerrilla User Interviews at Meetups</template>

      Quick conversations with attendees revealed what they actually needed from
      a community site</ProcessCard
    >
    <ProcessCard :number="3" color="white" class="lg:col-span-2">
      <template #title>Stakeholder Alignment with Kris Krüg</template>

      Ensured the site balanced business goals with real user
      needs.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
