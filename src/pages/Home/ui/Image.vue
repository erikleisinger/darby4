<template>
  <img
    :src="src"
    class="w-full h-[400px] md:h-[unset] object-cover md:object-contain"
    ref="image"
    :class="{ animated }"
  />
</template>
<style lang="scss" scoped>
.animated {
  animation: fadeIn 2s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0.7;
    transform: translateX(-1%) scaleX(1.01);
  }

  to {
    opacity: 1;
    transform: translateX(0) scaleX(1.01);
  }
}
</style>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{
  src: string
}>()

const image = ref(null)
const isVisible = useElementVisibility(image)

const animated = ref(false)

watch(isVisible, val => {
  animated.value = true
})
</script>
