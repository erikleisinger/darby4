<template>
  <figure>
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
      @click="expandImg"
      role="img"
      :aria-label="description"
      class="cursor-pointer"
    />
    <Typography
      v-if="description"
      tag="figcaption"
      type="caption"
      class="py-4 text-center"
      >{{ description }}</Typography
    >
  </figure>
  <Teleport to="#app">
    <figure
      class="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center transition-all text-white"
      :class="
        expand
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="endExpand"
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
        class="cursor-pointer"
        @click.stop="focused = !focused"
        v-bind="$attrs"
        role="img"
        :aria-label="description"
      />
      <Typography
        v-if="description"
        tag="figcaption"
        type="caption"
        class="py-4 text-center md:relative fixed sm:bottom-0 sm:z-10 sm:left-4 sm:right-4 sm:bg-black/50 md:bg-[unset] md:bottom-[unset] transition-all sm:backdrop-blur-sm md:backdrop-blur-[unset]"
        :style="{
          opacity: smAndDown && !focused ? '0' : '1',
        }"
        >{{ description }}</Typography
      >
    </figure>
  </Teleport>
</template>
<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { computed, ref } from 'vue'
import Typography from '../Typography/Typography.vue'
const props = defineProps<{
  description?: string
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

const focused = ref(false)
function expandImg() {
  expand.value = true
  focused.value = true
}

function endExpand() {
  expand.value = false
  focused.value = false
}
</script>
