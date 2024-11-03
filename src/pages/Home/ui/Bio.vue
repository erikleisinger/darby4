<template>
<div class="relative overflow-hidden">
  <MainSection class="relative z-10 -mt-[1rem] lg:-mt-[2rem]">

    <template #title>Bio</template>
    <div class="rounded-md p-4 bg-black/40">
      I’m a passionate UI & Content Designer who values a data-centric, human-centred approach. I advocate for
      authenticity,
      simplicity, and collaboration, avoiding hard sells and technocratic jargon. My focus is on creating emotionally
      resonant designs that connect with audiences while staying true to the project’s core goals and values.
      <br /> <br />
      I specialize in creating high-quality, authentic design for Marketing companies, startups, NGOs, and SaaS
      companies.
      Offering project based solutions, making it easy for organizations to access flexible, high-quality design
      services on
      a project basis.
    </div>

  </MainSection>
  <div class="absolute inset-0 bg" />
</div>
</template>
<style lang="scss" scoped>
.bg {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  filter: blur(8px);
  -webkit-filter: blur(8px);
  background-position: bottom;
  background-image: url('/city.png')
}
</style>
<script setup lang="ts">
import { MainSection } from '@/shared/MainSection';
</script>
