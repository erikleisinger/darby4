<template>
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_789_2509)">
      <path
        d="M21.9996 44C34.1504 44 44 34.1496 44 21.9996C44 9.84957 34.1504 0 21.9996 0C9.8487 0 0 9.84957 0 21.9996C0 34.1496 9.84957 44 21.9996 44Z"
        :fill="stroke"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9101 28.2877H27.4604V17.6183C27.4604 16.0109 26.1577 14.7083 24.5503 14.7083H10V25.3776C10 26.985 11.3026 28.2877 12.9101 28.2877ZM29.3995 24.4085L35.2197 28.2877V14.7083L29.4004 18.5883L29.3995 24.4085Z"
        fill="#2E3641"
      />
    </g>
    <defs>
      <clipPath id="clip0_789_2509">
        <rect width="44" height="44" fill="white" />
      </clipPath>
    </defs>
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
