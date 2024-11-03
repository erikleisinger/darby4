<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M22 40.3333C32.1252 40.3333 40.3334 32.1252 40.3334 22C40.3334 11.8748 32.1252 3.66666 22 3.66666C11.8748 3.66666 3.66669 11.8748 3.66669 22C3.66669 32.1252 11.8748 40.3333 22 40.3333Z"
    :stroke="stroke" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M35.0717 9.33167C27.9033 16.7567 18.3333 19.14 4.125 20.0567" :stroke="stroke" stroke-width="2.25"
    stroke-linecap="round" stroke-linejoin="round" />
  <path d="M39.875 23.54C27.7383 20.955 17.6183 25.3733 9.84497 35.1267" :stroke="stroke" stroke-width="2.25"
    stroke-linecap="round" stroke-linejoin="round" />
  <path d="M15.6934 5.04166C23.705 16.0417 26.6934 22.3117 30.36 37.5283" :stroke="stroke" stroke-width="2.25"
    stroke-linecap="round" stroke-linejoin="round" />
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
