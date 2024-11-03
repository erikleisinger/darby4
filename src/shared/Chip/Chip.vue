<template>
<div class="rounded-md px-4" :class="classes">
  <Typography tag="span" type="chip-example" class="whitespace-nowrap">
    <slot />
  </Typography>
</div>
</template>
<script lang="ts" setup>
import { Typography } from '@/shared/Typography'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'ghost'
  }>(),
  {
    variant: 'default',
  }
)

const classes = computed(() => {
  if (props.variant === 'default') {
    return 'border-gray-300 border-[2px] text-gray-300 bg-white'
  }
  return 'border-transparent border-white border-[1px] hover:bg-white hover:text-black'
})
</script>
