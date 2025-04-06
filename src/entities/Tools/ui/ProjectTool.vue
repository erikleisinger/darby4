<template>
  <div
    class="border-[1px] aspect-square flex flex-col items-center justify-center backdrop-blur-sm w-[48px] md:w-[80px]"
    :style="{
      backgroundColor: 'rgba(46, 54, 65, 0.40)',
    }"
    v-bind="$attrs"
  >
    <Icon
      :color="color"
      :stroke="stroke"
      :name="tool"
      :class="mdAndUp ? 'h-[24px]' : 'h-[12px]'"
    />
    <div class="text-center text-white/70 mt-1" v-if="!iconOnly">
      <Typography
        tag="h6"
        type="body-s"
        class="whitespace-nowrap"
        :style="{
          color: stroke,
        }"
      >
        {{ PROJECT_TOOL_NAMES[tool] }}</Typography
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { Tool } from '../lib/Tool'
import { computed } from 'vue'
import { Icon } from '@/shared/Icon'
import Typography from '@/shared/Typography/Typography.vue'

import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndUp = breakpoints.greaterOrEqual('md')
const props = withDefaults(
  defineProps<{
    color: 'white' | 'blue'
    iconOnly?: boolean
    tool: Tool
  }>(),
  {
    color: 'white',
  },
)

const stroke = computed(() => (props.color === 'white' ? '#FFFFF4' : '#7FD0E1'))

const PROJECT_TOOL_NAMES = {
  [Tool.Zoom]: 'Zoom',
  [Tool.Figma]: 'Figma',
  [Tool.Adobe]: 'Adobe',
  [Tool.OpenAI]: 'Open AI',
  [Tool.Discord]: 'Discord',
  [Tool.Miro]: 'Miro',
}
</script>
