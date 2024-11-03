<template>
<div class="fixed inset-0 lg:overflow-hidden">
  <ProjectSm class="lg:hidden project__container" :project="project" @back="emit('back')" :loading="loading" />
  <ProjectLg class="hidden lg:grid project__container" :project="project" @back="emit('back')" :loading="loading" />
</div>
</template>
<style lang="scss">
.project__container {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  animation: fade-in 0.3s forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;

  }
}
</style>
<script lang="ts" setup>
import type { Project } from '@/shared/config/projects'
import ProjectSm from './ProjectSm.vue';
import ProjectLg from './ProjectLg.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits(['back'])

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('md')

async function loadImages() {
  const images = (sm.value ? props.project.examples_mobile : props.project.examples).map(({ url }) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `/${url}`;
      img.onload = resolve;
      img.onerror = reject;
    });
  })
  await Promise.all(images)
}

const loading = ref(false)
onMounted(async () => {
  console.log('mounted: ', props.project)
  loading.value = true;

  await loadImages();
  loading.value = false;
})
</script>
