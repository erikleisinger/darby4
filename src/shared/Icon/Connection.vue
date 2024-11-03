<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M34.8333 25.6667C37.565 22.99 40.3333 19.7817 40.3333 15.5833C40.3333 12.9091 39.2709 10.3443 37.38 8.45334C35.489 6.56235 32.9242 5.5 30.25 5.5C27.0233 5.5 24.75 6.41667 22 9.16667C19.25 6.41667 16.9766 5.5 13.75 5.5C11.0757 5.5 8.51096 6.56235 6.61997 8.45334C4.72897 10.3443 3.66663 12.9091 3.66663 15.5833C3.66663 19.8 6.41663 23.0083 9.16663 25.6667L22 38.5L34.8333 25.6667Z"
    :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M22 9.16666L16.5733 14.5933C16.2008 14.9631 15.9052 15.403 15.7034 15.8875C15.5017 16.3721 15.3978 16.8918 15.3978 17.4167C15.3978 17.9415 15.5017 18.4612 15.7034 18.9458C15.9052 19.4303 16.2008 19.8702 16.5733 20.24C18.0767 21.7433 20.4783 21.7983 22.0733 20.3683L25.8683 16.885C26.8195 16.0218 28.058 15.5437 29.3425 15.5437C30.6269 15.5437 31.8654 16.0218 32.8167 16.885L38.2433 21.7617"
    :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M33 27.5L29.3334 23.8333" :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M27.5 33L23.8334 29.3333" :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
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
