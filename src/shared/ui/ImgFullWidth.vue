<template>
  <div
    class="my-[40px]"
    :style="{
      backgroundImage: `url(${src}_${suffix}.${extension})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      aspectRatio: '5/3',
      backgroundColor: 'black',
    }"
    v-bind="$attrs"
  />
</template>
<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { computed } from 'vue'
const props = defineProps<{
  src: string
  extension: string
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndDown = breakpoints.smaller('md')
const mdOnly = breakpoints.between('lg', 'xl')
const lgOnly = breakpoints.between('lg', 'xl')
const xlOnly = breakpoints.between('xl', '2xl')
const xxlOnly = breakpoints.greater('2xl')

const suffix = computed(() => {
  if (smAndDown.value) return 'sm'
  if (mdOnly.value) return 'lg'
  if (lgOnly) return 'xl'
  if (xlOnly) return '2xl'
  if (xxlOnly) return '3xl'
  return ''
})
</script>
