<template>
  <div class="relative button__wrap" :class="{ bordered }">
    <button
      class="opacity-0 transition-all relative text-black px-[16px] py-[16px] flex gap-2 items-center rounded-md w-fit"
      :class="{
        'button bg-gold-500 pr-[26px]':
          state === 'default' || state === 'loading',
        'bg-blue-300': state === 'success',
        bordered,
      }"
    >
      <Icon :name="icon" height="24px" v-if="icon && state === 'default'" />
      <Typography
        tag="div"
        type="button"
        class="mt-[-5px] grow"
        :class="{
          'text-center': state !== 'default',
        }"
      >
        <slot />
      </Typography>
    </button>
    <button
      class="absolute inset-0 z-10 transition-all text-black px-[16px] py-[16px] flex gap-2 items-center rounded-md w-fit"
      style="font-weight: 500"
      :class="{
        'button bg-gold-500 pr-[26px]':
          state === 'default' || state === 'loading',
        'bg-blue-300': state === 'success',
        bordered,
      }"
    >
      <Icon :name="icon" height="24px" v-if="icon && state === 'default'" />
      <Typography
        tag="div"
        type="button"
        class="mt-[-5px] grow"
        :class="{
          'text-center': state !== 'default',
        }"
      >
        <slot />
      </Typography>
    </button>
  </div>
</template>
<style lang="scss" scoped>
$shadow-offset: 10px;
.button__wrap {
  width: fit-content;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: white;
    transition: all 0.3s;
    border: 5px solid black;
    border-radius: 4px;
  }

  &:not(.bordered) {
    &:before {
      background-color: #7fd0e1;
    }
  }
}
.button {
  z-index: 10;
  border-radius: 4px;
  &:hover {
    transform: translate(8px, -8px);

    // box-shadow: #7fd0e1 -5px 5px;
  }

  &.bordered {
    border: 5px solid black;
  }
}
</style>
<script setup lang="ts">
import { Icon } from '@/shared/Icon'
import { Typography } from '@/shared/Typography'

const props = withDefaults(
  defineProps<{
    icon?: string
    state?: 'default' | 'loading' | 'success'
    bordered?: boolean
  }>(),
  {
    state: 'default',
  }
)
</script>
