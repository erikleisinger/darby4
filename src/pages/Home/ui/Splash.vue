<template>
  <div class="absolute inset-0 overflow-hidden">
    <header class="absolute inset-0 z-10 grid md:grid-cols-2 padding__standard">
      <div class="block md:hidden" />
      <div class="flex flex-col justify-center gap-4 md:gap-12">
        <div class="w-fit flex flex-col items-end">
          <Typography
            tag="h1"
            class="lg:text-lg-h1 md:text-md-h1 text-sm-h1 font-obvs font-bold text-left md:text-right w-fit max-w-[5ch] leading-[1] uppercase"
          >
            Darby
          </Typography>
          <Typography
            tag="h1"
            class="align-self-end text-right lg:text-lg-h1 md:text-md-h1 text-sm-h1 font-obvs font-bold text-left md:text-right w-fit max-w-[5ch] leading-[1] uppercase"
          >
            Yule
          </Typography>
        </div>

        <h2
          class="lg:text-lg-h4 md:text-md-h4 text-sm-h4 font-light"
          style="font-weight: 400"
        >
          <div class="md:whitespace-nowrap">
            UX Designer | Systems Thinker | Problem Solver
          </div>

          <div class="md:whitespace-nowrap">
            Designed with purpose, guided by data, built for connection.
          </div>
        </h2>

        <div class="w-full lg:text-lg-h1 md:text-md-h1 text-sm-h1 button__grid">
          <ChatButton @click="$emit('goDown')" />
        </div>
      </div>
      <div class="hidden md:block" />
    </header>

    <video
      v-if="sm"
      class="splash-video"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
      poster="/video_still_sm.png"
    >
      <source src="/splash_vid_sm.webm" type="video/webm" />
      <source src="/splash_vid_sm.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <video
      v-else-if="md"
      class="splash-video"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
      poster="/video_still_md.png"
    >
      <source src="/splash_vid_md.webm" type="video/webm" />
      <source src="/splash_vid_md.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <video
      v-else-if="xl"
      class="splash-video"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
      poster="/video_still_lg.png"
    >
      <source src="/splash_vid_xl.webm" type="video/webm" />
      <source src="/splash_vid_xl.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <video
      v-else-if="xl2"
      class="splash-video"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
      poster="/video_still_lg.png"
    >
      <source src="/splash_vid_2xl.webm" type="video/webm" />
      <source src="/splash_vid_2xl.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <video
      v-else-if="xl3"
      class="splash-video"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
      poster="/video_still_lg.png"
    >
      <source src="/splash_vid_3xl.webm" type="video/webm" />
      <source src="/splash_vid_3xl.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <video
      v-else
      class="splash-video"
      autoplay
      muted
      playsinline
      loop
      preload="metadata"
      poster="/video_still_lg.png"
    >
      <source src="/splash_vid_4xl.webm" type="video/webm" />
      <source src="/splash_vid_4xl.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
  </div>
</template>
<style lang="scss" scoped>
.splash-video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.button__grid {
  width: 5ch;
}
</style>
<script setup lang="ts">
import { Typography, getTypographyClass } from '@/shared/Typography'
import { Button } from '@/shared/Button'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import ChatButton from '@/shared/ui/ChatButton.vue'

const emit = defineEmits(['goDown'])

const breakpoints = useBreakpoints({
  ...breakpointsTailwind,
  '3xl': 1920,
  '4xl': 3000,
})
const sm = breakpoints.smaller('md')
const md = breakpoints.smaller('lg')
const xl = breakpoints.smaller('2xl')
const xl2 = breakpoints.smaller('3xl')
const xl3 = breakpoints.smaller('4xl')
</script>
