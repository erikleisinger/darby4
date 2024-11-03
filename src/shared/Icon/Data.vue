<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M38.5 12.8333L12.5034 38.83C11.5289 39.7937 10.2126 40.3327 8.84209 40.3293C7.47154 40.3259 6.15802 39.7803 5.18837 38.8117C4.21661 37.8388 3.67078 36.52 3.67078 35.145C3.67078 33.77 4.21661 32.4512 5.18837 31.4783L31.1667 5.5"
    :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M29.3334 3.66666L40.3334 14.6667" :stroke="stroke" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M22 29.3333H7.33337" :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
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
