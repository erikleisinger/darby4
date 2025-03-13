<template>
  <div
    class="w-[533px] xxl:w[800px] h-[462px] xxl:h-[693px] grid grid-rows-[1fr_auto] relative"
  >
    <Arrow class="absolute top-0 right-0" stroke="white" />
    <div
      :style="`background-image: url(/${backgroundImage}.png)`"
      class="bg-center bg-cover"
    />
    <div
      class="bg-gray-300 pl-2 py-3 uppercase text-[24px] xxl:text-[36px] tracking-[0] leading-[1.3]"
      style="font-weight: 600"
    >
      <div>
        <h2>
          <slot />
        </h2>
      </div>
      <div class="flex justify-end pr-16 cursor-pointer" role="button">
        <a class="uppercase underline">read more</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
import Arrow from '@/shared/Icon/Arrow.vue'
interface Props {
  backgroundImage: string
}

const props = defineProps<Props>()
</script>
