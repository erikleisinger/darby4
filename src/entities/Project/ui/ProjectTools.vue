<template>
<div>
  <Typography type="body" tag="p" class="mb-2"> Tools </Typography>
  <div class="flex gap-2 lg:gap-6">
    <ProjectTool v-for="tool in project.tools || []" :key="tool" :tool="tool" :color="color" />
  </div>
</div>
</template>
<script setup lang="ts">
import type { Project } from '@/shared/config/projects'
import { Typography } from '@/shared/Typography'
import ProjectTool from './ProjectTool.vue'

const props = withDefaults(
  defineProps<{
    project: Project
    color?: 'white' | 'gold'
  }>(),
  {
    color: 'white',
  }
)
</script>
