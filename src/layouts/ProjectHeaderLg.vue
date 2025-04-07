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
        <Typography tag="h5" type="body" class="text-blue-300 mb-2"
          >Tools:</Typography
        >
        <div class="grid grid-cols-[repeat(2,80px)] gap-4">
          <slot name="tools"></slot>
        </div>
        <Typography tag="h5" type="body" class="text-green-500 mb-2 mt-8"
          >Duties:</Typography
        >
        <div class="flex flex-col gap-4">
          <slot name="duties"></slot>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import Typography from '@/shared/Typography/Typography.vue'
const props = defineProps<{
  imgUrl: string
}>()
import ProjectHeaderText from './ProjectHeaderText.vue'
</script>
