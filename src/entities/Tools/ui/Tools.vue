<template>
  <div :class="lgAndUp ? 'text-blue-300 ' : 'text-white w-full'">
    <Typography tag="h4" type="body" class="font-bold mb-2">Tools:</Typography>
    <div
      class="grid gap-[16px]"
      :class="
        lgAndUp
          ? 'grid-cols-[repeat(auto-fit,80px)]'
          : 'grid-cols-[repeat(auto-fit,44px)]'
      "
    >
      <ProjectTool
        v-for="tool in tools"
        :key="tool"
        :tool="tool"
        :color="lgAndUp ? 'blue' : 'white'"
        :class="
          lgAndUp
            ? 'border-blue-300 w-[80px] p-[16px]'
            : 'border-white w-[44px] p-[8px]'
        "
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import { Tool } from '../lib'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import ProjectTool from './ProjectTool.vue'
const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndUp = breakpoints.greaterOrEqual('lg')

const props = defineProps<{
  tools: Tool[]
}>()
</script>
