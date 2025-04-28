<template>
  <ProjectTool
    v-for="tool in tools"
    :key="tool"
    :tool="tool"
    :color="lgAndUp ? 'blue' : 'white'"
    :class="
      lgAndUp
        ? 'border-blue-300 w-[80px] p-[16px] text-blue-300'
        : 'border-white w-[44px] p-[8px] text-white'
    "
  />
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import { Tool } from '../lib'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import ProjectTool from './ProjectTool.vue'
const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndUp = breakpoints.greaterOrEqual('lg')
const mdAndUp = breakpoints.greaterOrEqual('md')

const props = defineProps<{
  tools: Tool[]
}>()
</script>
