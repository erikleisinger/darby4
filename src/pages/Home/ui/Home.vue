<template>
  <header class="relative h-full w-full">
    <Splash @goDown="scrollToContact" />
  </header>
  <main>
    <Projects />
    <Image src="/banner_1.png" />
    <WhatTheySay />

    <Bio />
    <Contact id="contact-section" class="m-auto max-w-[800px]" />
    <Socials class="mb-[40px]" />
  </main>
</template>
<script setup lang="ts">
import Splash from './Splash.vue'

import { Projects } from '@/entities/Project'

import WhatTheySay from './WhatTheySay.vue'
import Bio from './Bio.vue'
import Contact from './Contact.vue'
import Socials from './Socials.vue'
import Image from './Image.vue'
import { preloadImages } from '@/shared/utils/preloadImages'
import { onBeforeUnmount, onMounted } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useRouter } from 'vue-router'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('md')

function scrollToContact() {
  document.getElementById('contact-section')?.scrollIntoView({
    behavior: sm.value ? 'instant' : 'smooth',
  })
}

const router = useRouter()
function onChatEmit() {
  router.push('/')
  scrollToContact()
}

onMounted(() => {
  preloadImages([
    'van/van_card.webp',
    'ccc/ccc_card.webp',
    'mff/mff_card.webp',
    'nrts/nrts_card.webp',
  ])

  window.addEventListener('chat', onChatEmit)
})

onBeforeUnmount(() => {
  window.removeEventListener('chat', onChatEmit)
})
</script>
