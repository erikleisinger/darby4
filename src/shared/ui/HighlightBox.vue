<template>
  <div class="bg-gray-300 p-2 grid grid-cols-[auto_1fr]">
    <Icon
      name="chevron"
      color="white"
      height="30px"
      style="max-height: unset; max-width: unset; margin-top: -3px"
    />
    <div>
      <span class="font-bold"><slot name="title" /> →</span>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from '../Icon/Icon.vue'
</script>
