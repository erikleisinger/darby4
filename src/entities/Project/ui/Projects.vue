<template>
  <MainSection
    :style="smAndDown ? 'padding-left: 16px; padding-right: 16px' : ''"
  >
    <template #title> Work </template>
    <div ref="el">
      <div
        class="grid gap-6 grid-cols-1 md:grid-cols-[repeat(auto-fill,533px)] w-full justify-center"
      >
        <Project
          v-for="(project, index) in projects"
          :key="project.key"
          :backgroundImage="`${project.key}/${project.key}_card.webp`"
          @click="viewProject(project.key)"
          class="animate-in"
          :style="{
            'animation-delay': index * 100 + 'ms',
          }"
        >
          {{ project.name }}
        </Project>
      </div>
    </div>
    '
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
<style lang="scss">
.animate-in {
  transition: all;
  animation-name: slide-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateX(-10%) scale(1);
  transition: all 1s;
}

@media (min-width: 768px) {
  .animate-in {
    &:hover {
      background-position: center;
    }
  }
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { MainSection } from '@/shared/MainSection'
import Project from './Project.vue'
import { Van } from '@/projects/Van'
import { useRouter, useRoute } from 'vue-router'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import CCC from '@/projects/CCC/CCC.vue'
import Loader from './Loader.vue'
import Mff from '@/projects/mff/Mff.vue'
import Nrts from '@/projects/nrts/Nrts.vue'
import { useElementVisibility } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndDown = breakpoints.smallerOrEqual('sm')
const router = useRouter()
const route = useRoute()

enum ProjectNameEnum {
  Van = 'van',
  CCC = 'ccc',
  Forest = 'mff',
  Trail = 'nrts',
}

const projects = [
  {
    name: 'Building a digital hub for Vancouver AI',
    key: ProjectNameEnum.Van,
  },
  {
    name: 'An Accessible Future for the CCC',
    key: ProjectNameEnum.CCC,
  },
  {
    name: 'Gamifying Finances for Young Adults',
    key: ProjectNameEnum.Forest,
  },
  {
    name: 'A Digital Debut for a growing business',
    key: ProjectNameEnum.Trail,
  },
]

const el = ref(null)

const visible = useElementVisibility(el)

const showProjects = ref(false)

watch(visible, val => {
  console.log('visible: ', val)
  if (!val) return
  showProjects.value = true
})

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
  if (Array.isArray(project)) return
  if (!project) return
  return {
    [ProjectNameEnum.Van]: Van,
    [ProjectNameEnum.CCC]: CCC,
    [ProjectNameEnum.Forest]: Mff,
    [ProjectNameEnum.Trail]: Nrts,
  }[project]
})
</script>
