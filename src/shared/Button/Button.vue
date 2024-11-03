<template><button class=" transition-all relative text-black  px-[16px]  py-[16px]  flex gap-2 items-center  rounded-md w-fit"
  :class="{
    'button bg-gold-500 pr-[26px]': state === 'default' || state === 'loading',
    'bg-blue-300': state === 'success'
  }">
  <Icon :name="icon" height="24px" v-if="icon && state === 'default'" />
  <Typography tag="div" type="button" class="mt-[-5px] grow" :class="{
    'text-center': state !== 'default'
  }">
    <slot />
  </Typography>

</button></template>
<style lang="scss" scoped>
.button {
  &:hover {
    transform: translate(8px, -8px);
    z-index: 10;
    box-shadow:
      #7FD0E1 -5px 5px,
  }

}
</style>
<script setup lang="ts">
import { Icon } from '@/shared/Icon';
import { Typography } from '@/shared/Typography';

const props = withDefaults(defineProps<{
  icon?: string,
  state?: 'default' | 'loading' | 'success'
}>(), {
  state: 'default'
})
</script>
