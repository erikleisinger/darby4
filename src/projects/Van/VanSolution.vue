<template>
  <div class="grid lg:grid-cols-2 gap-[40px]">
    <ProcessCard :number="1" color="green">
      <template #title>Home Page</template>

      Clearly communicates Vancouver AI’s mission, upcoming events, and latest
      updates.</ProcessCard
    >
    <ProcessCard :number="2" color="green">
      <template #title>Get Involved Page</template>

      Explains ways to join the community—whether as an attendee, speaker, or
      sponsor.</ProcessCard
    >
    <ProcessCard :number="3" color="green">
      <template #title>Events Page</template>

      Became more than just a ticketing system—now features past keynotes, AI
      learning resources, and event archives.</ProcessCard
    >
    <ProcessCard :number="4" color="green">
      <template #title>Community Page</template>
      A game-changer, allowing members to:  Join a directory of AI
      professionals.  Search for others with similar interests. Seamlessly
      transition to deeper discussions via Discord and WhatsApp.</ProcessCard
    >
    <ProcessCard :number="5" color="green" class="lg:col-span-2">
      <template #title>QR Code Signup System</template>
      To encourage organic community growth, I designed a QR code signup system
      for meetups, linking attendees to a Notion form. This made onboarding
      simple and in-the-moment, driving real engagement.</ProcessCard
    >
  </div>
</template>
<script setup lang="ts">
import ProcessCard from '@/shared/ui/ProcessCard.vue'
</script>
