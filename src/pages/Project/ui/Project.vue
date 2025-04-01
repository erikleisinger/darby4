<template>
  <div class="fixed inset-0 lg:overflow-hidden">
    <ProjectSm
      class="project__container"
      v-if="sm"
      :project="project"
      @back="emit('back')"
      :loading="loading"
    />
    <ProjectLg
      class="project__container"
      v-else
      :project="project"
      @back="emit('back')"
      :loading="loading"
    />
  </div>
</template>
<style lang="scss">
.project__container {
  /* From https://css.glass */
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
import ProjectSm from './ProjectSm.vue'
import ProjectLg from './ProjectLg.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { preloadImages } from '@/shared/utils/preloadImages'
const props = defineProps<{
  project: Project
}>()

const emit = defineEmits(['back'])

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('md')

async function loadImages() {
  await preloadImages(
    (sm.value ? props.project.examples_mobile : props.project.examples).map(
      ({ url }) => url,
    ),
  )
}

const loading = ref(false)
onMounted(async () => {
  loading.value = true

  await loadImages()
  loading.value = false
})
</script>
