<template>
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 34.8333L9.16669 22L22 9.16666"
      :stroke="stroke"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.8334 22H9.16669"
      :stroke="stroke"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
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
