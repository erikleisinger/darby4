<template>
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8333 12.8333H31.1666V31.1667"
      :stroke="stroke"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.8333 31.1667L31.1666 12.8333"
      :stroke="stroke"
      stroke-width="4"
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
