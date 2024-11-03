<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M36.6667 7.33334H7.33335C5.30831 7.33334 3.66669 8.97497 3.66669 11V33C3.66669 35.0251 5.30831 36.6667 7.33335 36.6667H36.6667C38.6917 36.6667 40.3334 35.0251 40.3334 33V11C40.3334 8.97497 38.6917 7.33334 36.6667 7.33334Z"
    :stroke="stroke" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M40.3334 12.8333L23.8884 23.2833C23.3224 23.638 22.6679 23.826 22 23.826C21.3321 23.826 20.6777 23.638 20.1117 23.2833L3.66669 12.8333"
    :stroke="stroke" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
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
