<template>
  <div class="lg:border-[5px] md:border-[3px] border-[1px] rounded-md font-bold px-4" :class="classes">
    <Typography type="body" tag="span">
      <slot/>
    </Typography>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Typography } from '@/shared/Typography'

  const props = defineProps<{
    color: 'gold' | 'blue'
  }>()

  const classes = computed(() => {
    const options = {
      gold: 'border-gold-500 text-gold-500',
      blue: 'border-blue-300 text-blue-300'
    }

    return options[props.color] || options.gold
  })
</script>

