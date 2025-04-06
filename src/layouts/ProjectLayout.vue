<template>
  <div class="absolute inset-0 overflow-auto bg-background">
    <nav class="px-4 py-4" v-if="!smAndDown">
      <button
        class="hover:bg-white/10 transition-all rounded-md text-[24px ] uppercase flex items-center pr-2 py-1"
        @click="router.push({ path: '/' })"
      >
        <Icon name="backArrow" color="white" class="h-[32px]" />
        Back
      </button>
    </nav>
    <div className="project__container bg-background">
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
        :imgUrl="headerImgUrl"
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
      <ProjectHeaderMd v-else :imgUrl="headerImgUrl">
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
      <main>
        <ProjectList>
          <slot name="main" />
          <div class="flex justify-center mt-4 mb-8 md:-mt-8">
            <ChatButton class="w-[333px] max-w-[80vw]" />
          </div>
        </ProjectList>
      </main>
    </div>
    <slot />

    <ProjectBottomNav />
  </div>
</template>
<style lang="scss">
.project__container {
  @media (min-width: 1024px) {
    padding: 0px 90px;
  }
  @media (max-width: 1024px) {
    main {
      padding: 0px 40px;
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 0px 20px;
    }
  }
}
</style>
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
