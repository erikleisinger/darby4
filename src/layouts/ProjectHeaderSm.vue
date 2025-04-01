<template>
  <header class="grid grid-rows-[auto_auto]">
    <div
      class="relative"
      :style="{
        backgroundImage: `url(${imgUrl})`,
        backgroundPositionY: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 64px)',
      }"
    >
      <div class="absolute bottom-4 left-4 w-full">
        <slot name="header-overlay" />
      </div>
    </div>

    <div class="justify-end text-right px-4">
      <ProjectHeaderText>
        <slot name="header-text" />
      </ProjectHeaderText>
    </div>
  </header>
</template>
<script setup lang="ts">
const props = defineProps<{
  imgUrl: string
}>()
import ProjectHeaderText from '@/shared/Project/ProjectHeaderText.vue'
</script>
