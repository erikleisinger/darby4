<template>
  <div
    :style="{
      backgroundImage: `url(${src}_${suffix}.${extension})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      aspectRatio: smAndDown && extension === 'gif' ? '5/7' : '5/3',
      backgroundColor: 'black',
    }"
    v-bind="$attrs"
    @click="expand = true"
  />
  <Teleport to="#app">
    <div
      class="fixed inset-0 z-50 bg-black/95 flex justify-center items-center transition-all"
      :class="
        expand
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="expand = false"
    >
      <div
        v-if="expand"
        :style="{
          backgroundImage: `url(${src}_${suffix}.${extension})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: 'min(500px,90vw)',
          aspectRatio: '5/3',
          backgroundColor: 'black',
        }"
        @click.stop
        v-bind="$attrs"
      />
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { computed, ref } from 'vue'
const props = defineProps<{
  src: string
  extension: string
}>()

const expand = ref(false)

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
