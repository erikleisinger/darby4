<template>
<div>
  <div class="max-w-[100vw] w-[100vw] -ml-[40px] pl-[40px] md:pl-[unset] overflow-x-auto flex flex-nowrap gap-[20px] ">
    <slot />
  </div>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  maxWidth: string
}>()
</script>
