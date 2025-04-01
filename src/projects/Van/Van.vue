<template>
  <ProjectLayout :headerImgUrl="headerImgUrl">
    <template #header-text>
      Building a <span class="text-gold-500">Digital Hub</span> for
      <span class="text-gold-500">Vancouver AI</span>: Creating a Community
      Centre
    </template>
    <template #main>
      <ProjectListItem :type="ProjectListNavType.Overview"> </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Problem"> </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Impact"> </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Research"> </ProjectListItem>
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
