<template>
  <header
    :style="{
      backgroundImage: `url(${imgUrl})`,
      height: 'calc(100vh - 64px)',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
    }"
    class="flex flex-col justify-between relative"
  >
    <div class="absolute top-4 left-4 w-full">
      <slot name="header-overlay" />
    </div>
    <div class="grow" />
    <div class="justify-end text-right backdrop-blur-md px-4">
      <ProjectHeaderText class="pb-6">
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
