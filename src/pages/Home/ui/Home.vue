<template>
<header class="relative h-full w-full">
  <Splash @goDown="scrollToContact" />
</header>
<main>
  <Projects />
  <img src="/banner_1.png" class="w-full h-[400px] md:h-[unset] object-cover md:object-contain" />
  <ServicesAndSectors />
  <img src="/banner_2.png" class="w-full h-[400px] md:h-[unset] object-cover md:object-contain" />
  <About />
  <WhyChooseMe class="h-[400px] md:h-[300px] lg:h-[550px]" />
  <WhatTheySay />
  <Bio />
  <Contact id="contact-section" class="m-auto max-w-[800px]" />
  <Socials class="mb-[40px]" />
</main>
</template>
<script setup lang="ts">
import Splash from './Splash.vue'
import Projects from './Projects.vue'
import ServicesAndSectors from './ServicesAndSectors.vue'
import About from './About.vue'
import WhyChooseMe from './WhyChooseMe.vue'
import WhatTheySay from './WhatTheySay.vue'
import Bio from './Bio.vue'
import Contact from './Contact.vue'
import Socials from './Socials.vue'
import { preloadImages } from '@/shared/utils/preloadImages'
import { onMounted } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('md')

function scrollToContact() {
  document.getElementById('contact-section')?.scrollIntoView({
    behavior: sm.value ? 'instant' : 'smooth'
  })
}

onMounted(() => {
  preloadImages(['project_card_arc.png', 'project_card_ccc.png', 'project_card_mff.png', 'project_card_nrts.png'])
})

</script>
