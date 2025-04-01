<template>
  <ProjectLayout :headerImgUrl="headerImgUrl">
    <template #header-text>
      Building a <span class="text-gold-500">Digital Hub</span> for
      <span class="text-gold-500">Vancouver AI</span>: Creating a Community
      Centre
    </template>
    <template #main>
      <ProjectListItem :type="ProjectListNavType.Overview">
        Vancouver AI is a growing community focused on AI education, networking,
        and meetups. But before this project, they had no real online home—event
        details were scattered across LinkedIn, discussions were buried in
        different forums, and community engagement was fragmented. Kris Krüg,
        the head of Vancouver AI, initially brought me in to design a simple
        website to drive event ticket sales. But as I dug deeper, it became
        clear that the real challenge wasn’t just selling tickets—it was
        building a centralized hub where the AI community could connect, learn,
        and grow beyond in-person meetups.
      </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Problem">
        <template #header>Defining the problem</template>
        <VanProblem></VanProblem>
      </ProjectListItem>
      <ImgFullWidth src="/van/van_turning" extension="gif" />
      <ProjectListItem :type="ProjectListNavType.Research">
        <template #header> Research & Strategy </template>
      </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Impact"> </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Result"> </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Solution"> </ProjectListItem>
    </template>
    <template #tools>
      <Tools
        :class="lgAnd"
        :tools="[Tool.Figma, Tool.Adobe, Tool.OpenAI, Tool.Discord]"
      />
    </template>
  </ProjectLayout>
</template>
<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import ProjectLayout from '@/layouts/ProjectLayout.vue'
import { ProjectListItem, ProjectListNavType } from '@/features/ProjectList'
import { computed } from 'vue'
import VanProblem from './VanProblem.vue'
import ImgFullWidth from '@/shared/ui/ImgFullWidth.vue'

import { Tools, Tool } from '@/entities/Tools'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndDown = breakpoints.smaller('md')
const mdOnly = breakpoints.between('lg', 'xl')
const lgOnly = breakpoints.between('lg', 'xl')
const xlOnly = breakpoints.between('xl', '2xl')
const xxlOnly = breakpoints.greater('2xl')

const headerImgUrl = computed(() => {
  if (smAndDown.value) return '/van/van_hero_sm.webp'
  if (mdOnly.value) return '/van/van_hero_md.webp'
  if (lgOnly) return '/van/van_hero_xl.webp'
  if (xlOnly) return '/van/van_hero_2xl.webp'
  if (xxlOnly) return '/van/van_hero_3xl.webp'
  return ''
})
</script>
