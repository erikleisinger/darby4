<template>
  <div
    class="border-b-[1px] border-gray-200 py-2 text-white hover:text-gold-500 hover:border-blue-300 cursor-pointer"
    @click="scrollToSection"
  >
    <Typography tag="h3" type="s1">
      {{ title }}
    </Typography>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { ProjectListNavType } from '../types'
import Typography from '@/shared/Typography/Typography.vue'
const props = defineProps<{
  item: ProjectListNavType
}>()

const title = computed(() => {
  return {
    [ProjectListNavType.Impact]: 'Impact',
    [ProjectListNavType.Overview]: 'Overview',
    [ProjectListNavType.Problem]: 'Problem',
    [ProjectListNavType.Research]: 'Research',
    [ProjectListNavType.Result]: 'Result',
    [ProjectListNavType.Solution]: 'Solution',
  }[props.item]
})

function scrollToSection() {
  const element = document.querySelector(`[data-section="${props.item}"]`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
