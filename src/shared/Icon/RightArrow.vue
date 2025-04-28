<template>
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 7.59717L16.7071 6.89006L17.4142 7.59717L16.7071 8.30427L16 7.59717ZM1 8.59717H0V6.59717H1V8.59717ZM10.7071 0.890061L16.7071 6.89006L15.2929 8.30427L9.29289 2.30427L10.7071 0.890061ZM16.7071 8.30427L10.7071 14.3043L9.29289 12.8901L15.2929 6.89006L16.7071 8.30427ZM16 8.59717H1V6.59717H16V8.59717Z"
      :fill="stroke"
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
  },
)
</script>
