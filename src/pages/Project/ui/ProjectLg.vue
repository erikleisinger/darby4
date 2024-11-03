<template>
<div class="absolute inset-0  bg-white/10   project-lg">
  <div
    class="m-auto gap-[120px] max-w-[1440px] grid grid-cols-2 grid-rows-1 bg-slate padding__standard overflow-auto absolute inset-0  project-lg-inner ">


    <section class="flex flex-col gap-[20px] sticky top-0 ">


      <Icon name="backArrow" color="white" class="absolute left-[-80px] top-[15px] cursor-pointer mb-4"
        @click="emit('back')" />
      <header>
        <Typography tag="h2" class="-mt-6">
          {{ project.title_main }}
        </Typography>
      </header>
      <div class="flex gap-4 flex-wrap">
        <Chip variant="ghost" v-for="tag in project.tags" :key="tag">{{ useTagName(tag) }}</Chip>

      </div>
      <Typography tag="p" type="p2"> {{ project.description }} </Typography>
      <div class="grow items-end  flex mb-[-40px]">
        <ProjectTools :project="project" />
      </div>
    </section>

    <div class="relative">
      <section class="flex flex-col gap-8  h-fit pb-8 ">
        <ProjectExample v-for="example in project.examples" :key="example.url" :example="example" />

      </section>
    </div>

  </div>
</div>
</template>
<style lang="scss" scoped>
.project-lg {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  animation: fade-in 0.3s forwards;

  .project-lg-inner {
    animation: slide-up 0.2s forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;

  }
}

@keyframes slide-up {
  from {

    transform: translateY(20px);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
}
</style>
<script lang="ts" setup>
import { Typography } from '@/shared/Typography'
import { Chip } from '@/shared/Chip'
import { Icon } from '@/shared/Icon'
import { ProjectTools, ProjectExample } from '@/entities/Project'
import type { Project } from '@/shared/config/projects'
import { useTagName } from '@/shared/lib/useTagName'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits(['back'])

</script>
