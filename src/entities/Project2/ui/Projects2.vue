<template>
  <MainSection>
    <template #title> Work </template>
    <div class="grid gap-6 grid-cols-[repeat(auto-fill,533px)]">
      <Project2 backgroundImage="van" @click="viewProject(ProjectNameEnum.Van)">
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
    </div>
    <Teleport to="#app" v-if="projectComponent">
      <div
        class="fixed inset-0 bg-background z-10 transition-all text-white"
        :class="
          projectComponent
            ? 'opacity-1 translate-x-[0] scale-[1] pointer-events-auto'
            : 'opacity-0 translate-x-[-10%] scale-[0.9] pointer-events-none'
        "
      >
        <component :is="projectComponent" />
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

const router = useRouter()
const route = useRoute()

enum ProjectNameEnum {
  Van = 'van',
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
  }[project]
})
</script>
