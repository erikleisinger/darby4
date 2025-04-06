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
    <div class="absolute top-4 left-0 right-0 px-8">
      <div class="grid grid-cols-2 gap-16">
        <div>
          <Typography tag="h5" type="body" class="mb-2 font-bold"
            >Tools:</Typography
          >
          <div class="flex gap-4 flex-wrap">
            <slot name="tools" />
          </div>
        </div>
        <div>
          <Typography tag="h5" type="body" class="text-right mb-2 font-bold"
            >Duties:</Typography
          >
          <div class="flex gap-4 justify-end flex-wrap">
            <slot name="duties" />
          </div>
        </div>
      </div>
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
import Typography from '@/shared/Typography/Typography.vue'
</script>
