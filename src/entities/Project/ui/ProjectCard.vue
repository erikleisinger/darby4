<template>
<div class="flex justify-between bg-cover p-[14px] rounded-md cursor-pointer aspect-square md:aspect-[3/2] animate-in"
  :style="{
    backgroundImage: `url(${backgroundImage})`,
  }">
  <div class="flex md:items-end grow max-w-[60%]">
    <ProjectCardTitle class="w-fit h-fit">
      {{ project.title_card }}
    </ProjectCardTitle>
  </div>
  <div class="flex flex-col justify-between items-end">
    <Icon name="arrow" />
    <Chip> {{ useTagName(project.tags[0]) }} </Chip>
  </div>
</div>
</template>
<style lang="scss" scoped>
.animate-in {
  transition: all;
  animation-name: slide-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateX(-10%) scale(1);
  transition: all 1s;

  &:hover {
    background-position: center;
    transform: scale(2)
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
import type { Project } from '@/shared/config/projects'
import ProjectCardTitle from './ProjectCardTitle.vue'
import { Icon } from '@/shared/Icon'
import { Chip } from '@/shared/Chip'
import { useTagName } from '@/shared/lib/useTagName'

const props = defineProps<{
  project: Project
}>()

const backgroundImage = new URL(
  `../assets/project_card_${props.project.key}.png`,
  import.meta.url
).href
</script>
