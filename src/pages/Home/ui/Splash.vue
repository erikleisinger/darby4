<template>
<div class="absolute inset-0 overflow-hidden">


  <header class="absolute inset-0 z-10 grid md:grid-cols-2 padding__standard">
    <div class="block md:hidden" />
    <div class="flex flex-col justify-center gap-4 md:gap-12">
      <Typography tag="h1"
        class="lg:text-lg-h1 md:text-md-h1 text-sm-h1 font-obvs font-bold text-left md:text-right w-fit max-w-[5ch] leading-[1] uppercase">
        Darby Yule
      </Typography>

      <h2 class="lg:text-lg-h4 md:text-md-h4 text-sm-h4 font-light" style="font-weight: 400">
        <div class="md:whitespace-nowrap">I’m a freelance Software Designer.</div>

        <div class="md:whitespace-nowrap">I make customer experiences easy.</div>
      </h2>

      <div>
        <Button icon="chevron" @click="emit('goDown')">Let's chat</Button>
      </div>
    </div>
    <div class="hidden md:block" />
  </header>


  <video v-if="sm" class="splash-video " autoplay muted playsinline loop preload="metadata"
    poster="/video_still_sm.png">
    <source src="/splash_vid_sm.mp4" type="video/mp4" />
  </video>
  <video v-else class="splash-video " autoplay muted playsinline loop preload="metadata" poster="/video_still_lg.png">
    <source src="/splash_vid_lg.mp4" type="video/mp4" />
  </video>

</div>
</template>
<style lang="scss" scoped>
.splash-video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
import { Button } from '@/shared/Button';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const emit = defineEmits(['goDown'])

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('md')
</script>
