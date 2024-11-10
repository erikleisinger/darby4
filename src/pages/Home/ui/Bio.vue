<template>
<div class="relative overflow-hidden">
  <MainSection class="relative z-10 -mt-[1rem] lg:-mt-[2rem]">

    <template #title>Bio</template>
    <div class="rounded-md p-4 bg-black/40  ">
      I’m Darby Yule, a Digital and User Experience Designer based in Burnaby, BC.
      I specialize in crafting user-centred designs that help small businesses and tech entrepreneurs succeed in a
      competitive landscape.
      My approach is grounded in authenticity and collaboration, ensuring that every project reflects the unique voice
      of my
      clients.
      <br /> <br />
      With a diverse background in music, content creation, and entrepreneurship, I provide high-quality, project-based
      design services tailored to the needs of startups, NGOs, and SaaS companies.
      My data-driven approach ensures that designs not only look great but also meet your business goals.

      <br /> <br />

      believe that design should be simple yet impactful. By prioritizing clarity and meaningful experiences, I help
      businesses connect with their audience on a deeper level.
      If you’re ready to elevate your brand and create exceptional digital experiences, let’s connect and explore how we
      can
      bring your vision to life!
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
