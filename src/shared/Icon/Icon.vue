<template>
  <component
    :is="iconComponent"
    :stroke="stroke || strokeColor || ''"
    v-bind="$attrs"
    class="max-h-[24px] max-w-[24px] md:max-h-[44px] md:max-w-[44px]"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Arrow from './Arrow.vue'
import BackArrow from './BackArrow.vue'
import Discord from './Discord.vue'
import Zoom from './Zoom.vue'
import OpenAi from './OpenAi.vue'
import Adobe from './Adobe.vue'
import Figma from './Figma.vue'
import Miro from './Miro.vue'
import Connection from './Connection.vue'
import Monitor from './Monitor.vue'
import Crane from './Crane.vue'
import Data from './Data.vue'
import Close from './Close.vue'
import Chevron from './Chevron.vue'
import Mail from './Mail.vue'
import LinkedIn from './LinkedIn.vue'
import Instagram from './Instagram.vue'
import Dribbble from './Dribbble.vue'
const props = withDefaults(
  defineProps<{
    name: string
    color?: 'white' | 'black' | 'gold' | 'blue'
    stroke?: string | null
  }>(),
  {
    color: 'black',
  },
)

const iconComponent = computed(
  () =>
    ({
      adobe: Adobe,
      arrow: Arrow,
      backArrow: BackArrow,
      discord: Discord,
      figma: Figma,
      miro: Miro,
      openAi: OpenAi,
      crane: Crane,
      connection: Connection,
      monitor: Monitor,
      data: Data,
      close: Close,
      chevron: Chevron,
      mail: Mail,
      instagram: Instagram,
      linkedIn: LinkedIn,
      dribbble: Dribbble,

      zoom: Zoom,
    })[props.name],
)

const strokeColor = computed(() =>
  props.color === 'white'
    ? '#FFFFF4'
    : props.color === 'gold'
      ? '#CFB53B'
      : props.color === 'blue'
        ? '#7FD0E1'
        : '#161620',
)
</script>
