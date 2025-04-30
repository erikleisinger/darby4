<template>
  <div class="absolute inset-0 overflow-auto bg-background">
    <nav class="px-4 py-4 sticky top-0 backdrop-blur-md" v-if="!smAndDown">
      <button
        class="hover:bg-white/10 transition-all rounded-md text-[24px ] uppercase flex items-center pr-2 py-1"
        @click="router.push({ path: '/' })"
      >
        <Icon name="backArrow" color="white" class="h-[32px]" />
        Back
      </button>
    </nav>
    <nav v-else class="fixed inset-0 pointer-events-none z-50 p-4">
      <button
        @click="router.push({ path: '/' })"
        class="pointer-events-auto z-50"
      >
        <Icon name="backArrow" color="white" class="text-[2rem]" />
      </button>
    </nav>
    <div className="px-0 md:px-6 lg:px-16 bg-background">
      <ProjectHeaderLg v-if="lgAndUp" :imgUrl="headerImgUrlResponsive">
        <template #header-text>
          <slot name="header-text"></slot>
        </template>
        <template #tools>
          <slot name="tools" />
        </template>
        <template #duties>
          <slot name="duties" />
        </template>
      </ProjectHeaderLg>

      <ProjectHeaderSm
        v-else-if="smAndDown"
        :imgUrl="headerImgUrlResponsive"
        @back="router.push({ path: '/' })"
      >
        <template #header-text>
          <slot name="header-text"></slot>
        </template>
        <template #tools>
          <slot name="tools" />
        </template>
        <template #duties>
          <slot name="duties" />
        </template>
      </ProjectHeaderSm>
      <ProjectHeaderMd v-else :imgUrl="headerImgUrlResponsive">
        <template #header-text>
          <slot name="header-text"></slot>
        </template>
        <template #tools>
          <slot name="tools" />
        </template>
        <template #duties>
          <slot name="duties" />
        </template>
      </ProjectHeaderMd>
      <main class="px-4 md:px-0">
        <ProjectList>
          <slot name="main" />
          <div class="flex justify-center sticky bottom-16 md:bottom-4 z-50">
            <ChatButton class="w-[min(333px,80vw)]" @click="onChat" />
          </div>
        </ProjectList>
      </main>
    </div>
    <slot />

    <ProjectBottomNav class="sticky bottom-0" />
  </div>
</template>

<script setup lang="ts">
import Icon from '@/shared/Icon/Icon.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useRouter } from 'vue-router'
import ProjectHeaderLg from './ProjectHeaderLg.vue'
import ProjectHeaderSm from './ProjectHeaderSm.vue'
import ProjectHeaderMd from './ProjectHeaderMd.vue'
import { ProjectList } from '@/features/ProjectList'
import { ProjectBottomNav } from '@/features/ProjectBottomNav'
import ChatButton from '@/shared/ui/ChatButton.vue'
import { computed } from 'vue'

function onChat() {
  window.dispatchEvent(new Event('chat'))
}

const props = defineProps<{
  headerImgUrl: string
}>()

const router = useRouter()
const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndDown = breakpoints.smaller('md')

const mdOnly = breakpoints.between('lg', 'xl')
const lgAndUp = breakpoints.greaterOrEqual('lg')
const lgOnly = breakpoints.between('lg', 'xl')
const xlOnly = breakpoints.between('xl', '2xl')
const xxlOnly = breakpoints.greater('2xl')

const headerImgUrlResponsive = computed(() => {
  if (smAndDown.value) return `${props.headerImgUrl}_sm.webp`
  if (mdOnly.value) return `${props.headerImgUrl}_md.webp`
  if (lgOnly) return `${props.headerImgUrl}_xl.webp`
  if (xlOnly) return `${props.headerImgUrl}_2xl.webp`
  if (xxlOnly) return `${props.headerImgUrl}_3xl.webp`
  return ''
})
</script>
