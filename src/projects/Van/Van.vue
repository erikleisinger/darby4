<template>
  <ProjectLayout :headerImgUrl="headerImgUrl">
    <template #header-text>
      Building a <span class="text-gold-500">Digital Hub</span> for
      <span class="text-gold-500">Vancouver AI</span>: Creating a Community
      Centre
    </template>
    <template #tools>
      <Tools
        :class="lgAnd"
        :tools="[Tool.Figma, Tool.Adobe, Tool.OpenAI, Tool.Discord]"
      />
    </template>
    <template #duties>
      <ProjectDuties
        :duties="[
          ProjectDuty.UIDesign,
          ProjectDuty.UXDesign,
          ProjectDuty.GenerativeAI,
        ]"
      />
    </template>
    <template #main>
      <ProjectListItem :type="ProjectListNavType.Overview">
        <Typography tag="p">
          Vancouver AI is a growing community focused on AI education,
          networking, and meetups. But before this project, they had no real
          online home—event details were scattered across LinkedIn, discussions
          were buried in different forums, and community engagement was
          fragmented. Kris Krüg, the head of Vancouver AI, initially brought me
          in to design a simple website to drive event ticket sales. But as I
          dug deeper, it became clear that the real challenge wasn’t just
          selling tickets—it was building a centralized hub where the AI
          community could connect, learn, and grow beyond in-person meetups.
        </Typography>
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Problem">
        <template #header>Defining the problem</template>
        <VanProblem></VanProblem>
      </ProjectListItem>

      <ImgFullWidth src="/van/van_turning" extension="gif" />

      <ProjectListItem :type="ProjectListNavType.Research">
        <template #header> Research & Strategy </template>
        <Typography tag="p">
          To validate and refine this vision, I focused on three core research
          methods:
        </Typography>

        <VanResearch />
        <Typography tag="p">
          A major discovery? The community hub was more valuable than the
          ticketing system. Attendees didn’t just want to buy tickets—they
          wanted a space to network, learn, and stay involved long after events
          ended. Using AI-driven tools like Adobe Firefly, Sorta, Lovable and
          Netlify also influenced the process. Unlike working with a developer,
          I had to: >
          <br />
          <List
            :listItems="[
              {
                title: ' Pre-define responsive wireframes',
                text: 'AI tools struggle with multiple breakpoints, so I designed forresponsivity first.',
              },
              {
                title: `Be hyper-clear in structure`,
                text: ` AI-driven systems require precise instructions—no room for vague
              iterations.`,
              },
            ]"
          />

          This meant my design process was more rigid upfront but led to faster
          execution.
        </Typography>
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Solution">
        <template #header> Solution </template>
        <VanSolution />
        <ImgFullWidth src="/van/van_post" extension="gif" />
      </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Impact">
        <template #header> Implementation & Launch </template>
        <VanImpact />
      </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Result">
        <div>
          <ImgFullWidth src="/van/van_wireframes" extension="webp" />
          <ImgFullWidth src="/van/van_wk_1" extension="gif" />
          <ImgFullWidth src="/van/van_wk_2" extension="gif" />
          <ImgFullWidth src="/van/van_wk_3" extension="gif" />
        </div>
      </ProjectListItem>
    </template>
  </ProjectLayout>
</template>
<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import ProjectLayout from '@/layouts/ProjectLayout.vue'
import { ProjectListItem, ProjectListNavType } from '@/features/ProjectList'
import { computed } from 'vue'
import VanProblem from './VanProblem.vue'
import VanResearch from './VanResearch.vue'
import VanSolution from './VanSolution.vue'
import VanImpact from './VanImpact.vue'
import ImgFullWidth from '@/shared/ui/ImgFullWidth.vue'
import Typography from '@/shared/Typography/Typography.vue'
import List from '@/shared/ui/List.vue'

import { Tools, Tool } from '@/entities/Tools'
import VanResult from './VanResult.vue'
import { ProjectDuties } from '@/entities/Duties'
import { ProjectDuty } from '@/entities/Duties/lib'

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
