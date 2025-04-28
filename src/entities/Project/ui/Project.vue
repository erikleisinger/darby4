<template>
  <div ref="el">
    <div
      v-if="shown"
      class="animate-in w-full md:w-[533px] xxl:w[800px] h-[462px] xxl:h-[693px] grid grid-rows-[1fr_100px] md:grid-rows-[1fr_120px] relative cursor-pointer group"
      v-bind="$attrs"
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
  </div>
</template>
<style lang="scss">
.animate-in {
  transition: all;
  animation-name: slide-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateX(-10%) scale(1);
  transition: all 1s;
}

@media (min-width: 768px) {
  .animate-in {
    &:hover {
      background-position: center;
    }
  }
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
<script setup lang="ts">
import Arrow from '@/shared/Icon/Arrow.vue'
import { useElementVisibility } from '@vueuse/core'
import { ref, watch } from 'vue'

const el = ref(null)

const visible = useElementVisibility(el)
const shown = ref(false)

watch(visible, val => {
  if (!val || !!shown.value) return
  shown.value = true
})

interface Props {
  backgroundImage: string
}

const props = defineProps<Props>()
</script>
