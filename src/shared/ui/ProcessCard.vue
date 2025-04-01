<template>
  <div
    :class="
      color === 'white' ? 'bg-white text-black' : 'bg-green-500 text-white'
    "
    class="flex flex-col justify-center items-center p-4 min-h-[230px]"
  >
    <Typography
      class="text-center font-bold"
      tag="p"
      type="body"
      style="font-size: 24px"
    >
      {{ number }}
    </Typography>
    <Typography
      class="text-center font-bold my-2"
      tag="p"
      style="font-size: 16px"
    >
      <slot name="title" />
    </Typography>
    <Typography class="text-center" tag="p" type="body" style="font-size: 16px">
      <slot />
    </Typography>
  </div>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
const props = defineProps<{
  color: 'white' | 'green'
  number: number
}>()
</script>
