<template>
  <div
    class="border-[1px] rounded-lg flex flex-col items-center backdrop-blur-sm w-fit p-2 md:p-4 md:py-3 h-fit"
    :style="{
      backgroundColor: 'rgba(46, 54, 65, 0.40)',
    }"
    v-bind="$attrs"
  >
    <div class="text-center text-white/70" v-if="!iconOnly">
      <Typography
        tag="h6"
        type="body-s"
        class="whitespace-nowrap"
        :style="{
          color: stroke,
        }"
      >
        {{ PROJECT_DUTY_NAMES[duty] }}
      </Typography>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProjectDuty } from '../lib/'
import { computed } from 'vue'
import { Icon } from '@/shared/Icon'
import Typography from '@/shared/Typography/Typography.vue'

import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndUp = breakpoints.greaterOrEqual('lg')
const props = withDefaults(
  defineProps<{
    color: 'white' | 'green'
    iconOnly?: boolean
    duty: ProjectDuty
  }>(),
  {
    color: 'white',
  },
)

const stroke = computed(() => (props.color === 'white' ? '#FFFFF4' : '#95AF88'))

const PROJECT_DUTY_NAMES = {
  [ProjectDuty.Branding]: 'Branding',
  [ProjectDuty.ContentDesign]: 'Content Design',
  [ProjectDuty.GenerativeAI]: 'Generative AI',
  [ProjectDuty.Strategy]: 'Strategy',
  [ProjectDuty.UIDesign]: 'UI Design',
  [ProjectDuty.UXDesign]: 'UX Design',
}
</script>
