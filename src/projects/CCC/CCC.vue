<template>
  <ProjectLayout headerImgUrl="/ccc/ccc_hero">
    <template #header-text>
      Building a more
      <span class="text-gold-500 italic">Accessible Future</span> for the
      Community Counselling Centre
    </template>
    <template #tools>
      <Tools
        :class="lgAnd"
        :tools="[Tool.Figma, Tool.Adobe, Tool.OpenAI, Tool.Zoom]"
      />
    </template>
    <template #duties>
      <ProjectDuties
        :duties="[
          ProjectDuty.UIDesign,
          ProjectDuty.UXDesign,
          ProjectDuty.ContentDesign,
        ]"
      />
    </template>
    <template #main>
      <ProjectListItem :type="ProjectListNavType.Overview">
        <Typography tag="p">
          When people search for counselling, they’re often at one of the most
          vulnerable moments in their lives. The Community Counselling Centre
          (CCC) in Prince George, BC, provides essential, low-barrier mental
          health services to the community. But their website? It was a
          maze—cluttered, text-heavy, and difficult to navigate. Worse yet,
          clients stuck on waitlists had no interim support, leaving them
          stranded. My task was to redesign the website to be clearer, more
          accessible, and genuinely helpful for those seeking care.
        </Typography>
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Problem">
        <template #header>Defining the problem</template>
        <CCCProblem />
      </ProjectListItem>

      <ImgFullWidth src="/ccc/ccc_card_sort" extension="webp" />

      <ProjectListItem :type="ProjectListNavType.Research">
        <template #header> Research & Strategy </template>
        <Typography tag="p">
          To reimagine the site’s structure, I conducted
          <strong> card sorting workshops</strong>
          with CCC staff, mapping how they categorized services versus how
          clients expected to find them. Two massive insights emerged.
        </Typography>

        <CCCResearch />
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Solution">
        <template #header> Solution </template>

        <CCCSolution />
      </ProjectListItem>
      <ImgFullWidth src="/ccc/ccc_service" extension="gif" />
      <ProjectListItem :type="ProjectListNavType.Impact">
        <template #header> Implementation & Launch </template>
        <CCCImpact />
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Result">
        <div>
          <ImgFullWidth src="/ccc/ccc_wireframe" extension="webp" />
          <ImgFullWidth src="/ccc/ccc_walk" extension="gif" />
          <ImgFullWidth src="/ccc/ccc_walk_2" extension="gif" />
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
import ImgFullWidth from '@/shared/ui/ImgFullWidth.vue'
import Typography from '@/shared/Typography/Typography.vue'
import List from '@/shared/ui/List.vue'
import CCCProblem from './CCCProblem.vue'
import { Tools, Tool } from '@/entities/Tools'
import { ProjectDuties } from '@/entities/Duties'
import { ProjectDuty } from '@/entities/Duties/lib'
import CCCResearch from './CCCResearch.vue'
import CCCSolution from './CCCSolution.vue'
import CCCImpact from './CCCImpact.vue'

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
