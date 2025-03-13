<template>
  <div class="relative overflow-hidden">
    <MainSection class="relative z-10 text-[24px] max-w-[82ch] leading-[1.5em]">
      <div class="rounded-md p-4 bg-black/40">
        <span class="text-gold-500 font-bold"
          >For as long as he can remember, Darby Yule has been making
          things</span
        >—
        <br />

        designing digital experiences, crafting compelling brand stories, and
        writing music. As a UX strategist and digital designer, Darby has worked
        with marketers, non-profits, and established brands to craft digital
        experiences that aren’t just functional, but intuitive and meaningful.
        <br />

        Freelancing since day one, Darby understands what it takes to turn
        creativity into strategy. He guides teams through the complexities of
        user experience, accessibility, and AI-driven design, ensuring that
        every interaction serves both user needs and business objectives. His
        mission? Create products that work, feel great, and drive meaningful
        engagement.

        <br />

        Beyond design, Darby has a long history of creative entrepreneurship,
        having built a career across multiple industries, including music and
        digital media. This adaptability allows him to blend analytical thinking
        with storytelling, branding, and user psychology—resulting in design
        solutions that don’t just work, but resonate. Today, Darby is deeply
        invested in the evolving relationship between AI, design, and human
        experience. He thrives in fast-moving, problem-solving environments,
        collaborating with forward-thinking teams to push the boundaries of
        what’s possible in UX.
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
  background-image: url('/bio_bg.png');
  background-size: cover;
  background-position: 0% 30%;
}
</style>
<script setup lang="ts">
import { MainSection } from '@/shared/MainSection'
</script>
