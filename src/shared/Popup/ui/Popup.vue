<template>
  <PopupOpen v-if="open" @close="open = false">
    <slot name="open" />
  </PopupOpen>

  <div v-else @click="openPopup" class="relative cursor-pointer">
    <slot name="closed" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import PopupOpen from './PopupOpen.vue'

let open = ref(false)

function openPopup() {
  console.log('open')
  open.value = true
}
</script>
