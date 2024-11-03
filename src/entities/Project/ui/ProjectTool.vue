<template>
<div>
  <Icon :color="color" :stroke="stroke" :name="tool" />
  <div class="text-[8px] lg:text-[12px] text-center text-white/70 mt-1" v-if="!iconOnly">
    {{ PROJECT_TOOL_NAMES[tool] }}
  </div>
</div>
</template>
<script setup lang="ts">
import type { ProjectTool } from '@/shared/config/projects'
import { computed } from 'vue'
import { Icon } from '@/shared/Icon'

const props = withDefaults(
  defineProps<{
    color: 'gold' | 'white'
    iconOnly?: boolean;
    tool: ProjectTool
  }>(),
  {
    color: 'white',
  }
)

const stroke = computed(() => (props.color === 'white' ? '#BDB9B9' : null))

const PROJECT_TOOL_NAMES: {
  [key in ProjectTool]: string
} = {
  zoom: 'Zoom',
  figma: 'Figma',
  adobe: 'Adobe',
  openAi: 'Open AI',
  discord: 'Discord',
  miro: 'Miro'
}
</script>
