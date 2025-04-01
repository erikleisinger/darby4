<template>
  <header>
    <ProjectHeaderText class="mb-12">
      <slot name="header-text" />
    </ProjectHeaderText>
    <div class="grid grid-cols-[1fr_200px] gap-[90px]">
      <div
        className="w-full  min-h-[550px]"
        :style="{
          backgroundImage: `url(${imgUrl})`,
          backgroundPositionY: 'center',
          backgroundSize: 'cover',
        }"
      />
      <div class="">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
const props = defineProps<{
  imgUrl: string
}>()
import ProjectHeaderText from '@/shared/Project/ProjectHeaderText.vue'
</script>
