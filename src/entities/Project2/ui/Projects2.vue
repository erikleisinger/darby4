<template>
  <MainSection
    :style="smAndDown ? 'padding-left: 16px; padding-right: 16px' : ''"
  >
    <template #title> Work </template>
    <div
      class="grid gap-6 grid-cols-1 md:grid-cols-[repeat(auto-fill,533px)] w-full justify-center"
    >
      <Project2
        backgroundImage="van/van_card.webp"
        @click="viewProject(ProjectNameEnum.Van)"
      >
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2
        backgroundImage="ccc/ccc_card.webp"
        @click="viewProject(ProjectNameEnum.CCC)"
      >
        An Accessible Future for the CCC
      </Project2>
      <Project2
        backgroundImage="mff/mff_card.webp"
        @click="viewProject(ProjectNameEnum.Forest)"
      >
        Gamifying Finances for Young Adults
      </Project2>
      <Project2
        backgroundImage="nrts/nrts_card.webp"
        @click="viewProject(ProjectNameEnum.Trail)"
      >
        A Digital Debut for a growing business
      </Project2>
    </div>
    <Teleport to="#app" v-if="projectComponent">
      <div
        class="fixed inset-0 z-10 transition-all text-white"
        :class="
          projectComponent
            ? 'opacity-1 translate-x-[0] scale-[1] pointer-events-auto'
            : 'opacity-0 translate-x-[-10%] scale-[0.9] pointer-events-none'
        "
      >
        <Loader> <component :is="projectComponent" /></Loader>
      </div>
    </Teleport>
  </MainSection>
</template>
<script setup lang="ts">
import { Teleport } from 'vue'
import { computed } from 'vue'
import { MainSection } from '@/shared/MainSection'
import Project2 from './Project2.vue'
import { Van } from '@/projects/Van'
import { useRouter, useRoute } from 'vue-router'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import CCC from '@/projects/CCC/CCC.vue'
import Loader from './Loader.vue'
import Mff from '@/projects/mff/Mff.vue'
import Nrts from '@/projects/nrts/Nrts.vue'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndDown = breakpoints.smallerOrEqual('sm')
const router = useRouter()
const route = useRoute()

enum ProjectNameEnum {
  Van = 'van',
  CCC = 'ccc',
  Forest = 'forest',
  Trail = 'trail',
}
function viewProject(project: ProjectNameEnum) {
  router.push({
    name: 'home',
    params: {
      project: project,
    },
  })
}

const projectComponent = computed(() => {
  const { project } = route.params
  if (!project) return
  return {
    [ProjectNameEnum.Van]: Van,
    [ProjectNameEnum.CCC]: CCC,
    [ProjectNameEnum.Forest]: Mff,
    [ProjectNameEnum.Trail]: Nrts,
  }[project]
})
</script>
