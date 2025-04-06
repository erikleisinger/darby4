<template>
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7.59717L1.29289 8.30427L0.585786 7.59717L1.29289 6.89006L2 7.59717ZM17 6.59717H18V8.59717H17V6.59717ZM7.29289 14.3043L1.29289 8.30427L2.70711 6.89006L8.70711 12.8901L7.29289 14.3043ZM1.29289 6.89006L7.29289 0.890061L8.70711 2.30427L2.70711 8.30427L1.29289 6.89006ZM2 6.59717L17 6.59717V8.59717L2 8.59717L2 6.59717Z"
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
