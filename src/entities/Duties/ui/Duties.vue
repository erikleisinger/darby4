<template>
  <ProjectDuty
    v-for="duty in duties"
    :key="duty"
    :duty="duty"
    :color="lgAndUp ? 'green' : 'white'"
    :class="
      lgAndUp
        ? 'border-green-500 w-[80px] text-green-500 '
        : 'border-white w-[44px] text-white '
    "
  />
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import { ProjectDuty as ProjectDutyEnum } from '../lib/'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import ProjectDuty from './ProjectDuty.vue'
const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndUp = breakpoints.greaterOrEqual('lg')
const mdAndUp = breakpoints.greaterOrEqual('md')

const props = defineProps<{
  duties: ProjectDutyEnum[]
}>()
</script>
