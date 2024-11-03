<template>
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_789_2503)">
<path d="M9.53333 0H34.4667C39.6917 0 44 4.30833 44 9.53333V34.4667C44 39.6917 39.6917 44 34.4667 44H9.53333C4.30833 44 0 39.6917 0 34.4667V9.53333C0 4.30833 4.30833 0 9.53333 0Z" :fill="stroke"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5243 5.5H25.666L29.6994 12.5583L20.8993 5.5H16.041L20.441 14.1167L11.2743 5.5H6.41602L11.2743 16.5L6.41602 38.5H11.2743L20.5327 14.9417L16.041 38.5H20.8993L29.791 13.3833L25.7577 38.5H30.616L39.416 11L30.5243 5.5Z" fill="#2E3641"/>
</g>
<defs>
<clipPath id="clip0_789_2503">
<rect width="44" height="44" fill="white"/>
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
