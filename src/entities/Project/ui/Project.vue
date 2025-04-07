<template>
  <div
    class="w-full md:w-[533px] xxl:w[800px] h-[462px] xxl:h-[693px] grid grid-rows-[1fr_100px] md:grid-rows-[1fr_120px] relative cursor-pointer group"
  >
    <Arrow class="absolute top-0 right-0" stroke="white" />
    <div
      :style="`background-image: url(/${backgroundImage})`"
      class="bg-center bg-cover"
    />
    <div
      class="bg-gray-300 pl-2 py-3 uppercase text-[24px] xxl:text-[36px] tracking-[0] leading-[1.3] relative"
      style="font-weight: 600"
    >
      <div>
        <h2 class="text-[20px] md:text-[24px]">
          <slot />
        </h2>
      </div>
      <div
        class="flex justify-end pr-4 md:pr-16 cursor-pointer mt-4 absolute bottom-4 right-4"
        role="button"
      >
        <a
          class="uppercase underline text-[20px] md:text-[24px] group-hover:text-blue-300 transition-all"
          >read more</a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Arrow from '@/shared/Icon/Arrow.vue'

interface Props {
  backgroundImage: string
}

const props = defineProps<Props>()
</script>
