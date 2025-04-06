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
      <div class="absolute bottom-4 left-4 w-full flex flex-col gap-4">
        <div>
          <Typography tag="h4" type="body" class="font-bold mb-2"
            >Tools:</Typography
          >
          <div class="flex gap-2">
            <slot name="tools" />
          </div>
        </div>
        <div>
          <Typography tag="h4" type="body" class="font-bold mb-2"
            >Duties:</Typography
          >
          <div class="flex gap-2">
            <slot name="duties" />
          </div>
        </div>
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
import Typography from '@/shared/Typography/Typography.vue'
const props = defineProps<{
  imgUrl: string
}>()
import ProjectHeaderText from '@/shared/Project/ProjectHeaderText.vue'
</script>
