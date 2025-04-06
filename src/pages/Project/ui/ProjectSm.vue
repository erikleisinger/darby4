<template>
  <div class="absolute inset-0 overflow-auto overflow-x-hidden">
    <div
      class="gap-[40px] grid grid-cols-1 grid-rows-[1fr,auto,auto] bg-slate padding__standard"
    >
      <section class="flex flex-col gap-[20px] md:gap-[24px]">
        <Icon
          name="backArrow"
          color="white"
          class="-ml-[25px] md:-ml-[50px] -mt-[40px] md:mt-0 mb-[30px] cursor-pointer mb-4"
          @click="emit('back')"
        />
        <header>
          <Typography tag="h2" class="-mt-6">
            {{ project.title_main }}
          </Typography>
        </header>
        <div class="flex gap-4 flex-wrap">
          <Chip variant="ghost" v-for="tag in project.tags" :key="tag">{{
            useTagName(tag)
          }}</Chip>
        </div>
        <Typography tag="p" type="p2"> {{ project.description }} </Typography>
        <div class="grow items-end hidden">
          <ProjectTools :project="project" />
        </div>
      </section>
      <section
        class="relative flex items-center gap-8 h-[75vw] w-[100vw] -ml-[43px] pl-[43px] md:-ml-[86px] md:pl-[86px] overflow-x-auto overflow-y-hidden pr-[40px] md:pr-[80px] hide-scroll"
      >
        <ProjectExample
          v-for="example in examples"
          :key="example.url"
          :example="example"
          class="aspect-square md:aspect-[unset] object-contain"
        />
      </section>
      <section>
        <ProjectTools :project="project" />
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PROJECTS } from '@/shared/config/projects'
import { Typography } from '@/shared/Typography'
import { Chip } from '@/shared/Chip'
import { Icon } from '@/shared/Icon'
import { useRouter } from 'vue-router'
import { ProjectTools, ProjectExample } from '@/entities/Project'
import type { Project } from '@/shared/config/projects'
import { useTagName } from '@/shared/lib/useTagName'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits(['back'])

const breakpoints = useBreakpoints(breakpointsTailwind)
const examples = computed(() => {
  if (breakpoints.smaller('md').value) return props.project.examples_mobile
  return props.project.examples
})

const imgs = ['1', '2', '3', '4', '5', '6']
</script>
