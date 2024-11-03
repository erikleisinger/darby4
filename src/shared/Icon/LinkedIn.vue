<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M29.3333 14.6667C32.2507 14.6667 35.0486 15.8256 37.1115 17.8885C39.1744 19.9514 40.3333 22.7493 40.3333 25.6667V38.5H33V25.6667C33 24.6942 32.6137 23.7616 31.926 23.0739C31.2384 22.3863 30.3058 22 29.3333 22C28.3609 22 27.4282 22.3863 26.7406 23.0739C26.053 23.7616 25.6666 24.6942 25.6666 25.6667V38.5H18.3333V25.6667C18.3333 22.7493 19.4922 19.9514 21.5551 17.8885C23.618 15.8256 26.4159 14.6667 29.3333 14.6667Z"
    :stroke="stroke" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M11 16.5H3.66669V38.5H11V16.5Z" :stroke="stroke" stroke-width="2.25" stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M7.33335 11C9.3584 11 11 9.35837 11 7.33332C11 5.30828 9.3584 3.66666 7.33335 3.66666C5.30831 3.66666 3.66669 5.30828 3.66669 7.33332C3.66669 9.35837 5.30831 11 7.33335 11Z"
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
