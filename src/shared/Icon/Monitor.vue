<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M14.6667 20.1667C16.6917 20.1667 18.3333 18.5251 18.3333 16.5C18.3333 14.475 16.6917 12.8333 14.6667 12.8333C12.6416 12.8333 11 14.475 11 16.5C11 18.5251 12.6416 20.1667 14.6667 20.1667Z"
    :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M16.5 31.1667L27.6833 19.9833C28.3719 19.3084 29.2987 18.9319 30.2629 18.9353C31.2271 18.9388 32.1512 19.3219 32.835 20.0017L40.3333 27.5M40.3333 27.5V9.16667C40.3333 8.19421 39.947 7.26157 39.2594 6.57394C38.5717 5.88631 37.6391 5.5 36.6666 5.5H7.33329C6.36083 5.5 5.4282 5.88631 4.74057 6.57394C4.05293 7.26157 3.66663 8.19421 3.66663 9.16667V27.5C3.66663 28.4725 4.05293 29.4051 4.74057 30.0927C5.4282 30.7804 6.36083 31.1667 7.33329 31.1667H36.6666C37.6391 31.1667 38.5717 30.7804 39.2594 30.0927C39.947 29.4051 40.3333 28.4725 40.3333 27.5Z"
    :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M14.6666 38.5H29.3333" :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M22 31.1667V38.5" :stroke="stroke" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
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
