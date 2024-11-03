<template>
<div class="fixed inset-0 lg:overflow-hidden">
  <ProjectSm class="lg:hidden" :project="project" @back="emit('back')" />
  <ProjectLg class="hidden lg:grid" :project="project" @back="emit('back')" />
</div>
</template>
<script lang="ts" setup>
import type { Project } from '@/shared/config/projects'
import ProjectSm from './ProjectSm.vue';
import ProjectLg from './ProjectLg.vue'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits(['back'])

</script>
