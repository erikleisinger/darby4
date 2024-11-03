<template>
<MainSection>
  <template #title> Work </template>
  <div class="w-[100vw] md:w-[100%]  h-full gap-[20px]" ref="el">
    <div v-if="showProjects"
      class="flex flex-nowrap gap-[20px] pl-[43px] pr-[80px] -ml-[43px] md:ml-[unset]  md:px-[unset] overflow-x-auto md:overflow-x-hidden md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[13px] lg:gap-[24px] hide-scroll">
      <ProjectCard class="w-[75vw] h-[75vw] md:w-[unset] md:h-[unset]" v-for="project, index in PROJECTS"
        :key="project.key" :style="{
          'animation-delay': index * 100 + 'ms'
        }" :project="project" @click="viewProject(project)" />
    </div>
  </div>
</MainSection>
<ProjectView v-if="project" :project="project" class="z-20" @back="project = null" />
</template>
<script setup lang="ts">
import type { Project } from '@/shared/config/projects'
import { Popup } from '@/shared/Popup'
import { PROJECTS } from '@/shared/config/projects'
import { MainSection } from '@/shared/MainSection'
import { ProjectCard } from '@/entities/Project'
import { Project as ProjectView } from '@/pages/Project'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const router = useRouter()

const el = ref(null)

const visible = useElementVisibility(el)

const showProjects = ref(false)

watch(visible, (val) => {
  if (!val) return;
  showProjects.value = true;
})

const project = ref<Project | null>(null);
function viewProject(projectToView: Project) {
  project.value = projectToView
}

</script>
