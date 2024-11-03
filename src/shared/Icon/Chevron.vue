<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 31.1667L20.1667 22L11 12.8333" :stroke="stroke" stroke-width="2.25" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M23.8334 31.1667L33 22L23.8334 12.8333" :stroke="stroke" stroke-width="2.25" stroke-linecap="round"
    stroke-linejoin="round" />
</svg></template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    stroke: string
  }>(),
  {
    stroke: '#161620',
  }
)
</script>
