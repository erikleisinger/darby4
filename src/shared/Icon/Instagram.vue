<template><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M31.1667 3.66666H12.8334C7.77074 3.66666 3.66669 7.77071 3.66669 12.8333V31.1667C3.66669 36.2293 7.77074 40.3333 12.8334 40.3333H31.1667C36.2293 40.3333 40.3334 36.2293 40.3334 31.1667V12.8333C40.3334 7.77071 36.2293 3.66666 31.1667 3.66666Z"
    :stroke="stroke" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M29.3333 20.845C29.5596 22.3708 29.299 23.9291 28.5885 25.2982C27.8781 26.6673 26.7541 27.7776 25.3763 28.4711C23.9985 29.1646 22.4371 29.4059 20.9143 29.1609C19.3914 28.9158 17.9846 28.1968 16.8939 27.1061C15.8032 26.0154 15.0842 24.6086 14.8391 23.0857C14.5941 21.5628 14.8354 20.0015 15.5289 18.6237C16.2224 17.2459 17.3327 16.1219 18.7018 15.4114C20.0709 14.701 21.6292 14.4404 23.155 14.6667C24.7114 14.8975 26.1522 15.6227 27.2648 16.7352C28.3773 17.8478 29.1025 19.2886 29.3333 20.845Z"
    :stroke="stroke" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M32.0833 11.9167H32.1016" :stroke="stroke" stroke-width="2.25" stroke-linecap="round"
    stroke-linejoin="round" />
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
