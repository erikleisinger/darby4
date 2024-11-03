<template>
  <div class="fixed inset-10 z-10 bg-slate popup-open" ref="el">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.popup-open {
  animation: fadein 0.5s ease-in-out forwards;
  transform-origin: top;
}
@keyframes fadein {
  0% {
    opacity: 0;
    transform: scaleY(105%) translateY(10px);
  }

  100% {
    opacity: 1;
    transform: scaleY(100%) translateY(0px);
  }
}
</style>
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const emit = defineEmits(['close'])

const el = ref(null)
onClickOutside(el, () => {
  emit('close')
})
</script>
