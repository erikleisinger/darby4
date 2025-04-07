<template>
  <div
    class="absolute inset-0 backdrop-blur-md"
    :class="loading ? 'bg-transparent' : 'bg-background'"
  >
    <slot v-if="!loading" />
  </div>
</template>
<script setup lang="ts">
import { preloadImages } from '@/shared/utils/preloadImages'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const route = useRoute()
const key = computed(() => route.params.project)

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

async function loadImages() {
  console.log(
    'loading: ',
    `${key.value}/${key.value}_hero_${suffix.value}.webp`,
  )
  await preloadImages([`${key.value}/${key.value}_hero_${suffix.value}.webp`])
}

const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    await loadImages()
    loading.value = false
  } catch (e) {
    console.log('e: ', e)
    loading.value = false
  }
})
</script>
