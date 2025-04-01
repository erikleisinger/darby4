<template>
  <div class="absolute inset-0 overflow-auto bg-background">
    <nav class="px-4 py-4">
      <button
        class="hover:bg-white/10 transition-all rounded-md text-[24px ] uppercase flex items-center pr-2 py-1"
        @click="router.back()"
      >
        <Icon name="backArrow" color="white" class="h-[32px]" />
        Back
      </button>
    </nav>
    <div className="project__container bg-background">
      <ProjectHeaderLg v-if="lgAndUp" :imgUrl="headerImgUrl">
        <template #header-text>
          <slot name="header-text"></slot>
        </template>
        <template #right>
          <slot name="tools" />
        </template>
      </ProjectHeaderLg>

      <ProjectHeaderSm v-else-if="smAndDown" :imgUrl="headerImgUrl">
        <template #header-text>
          <slot name="header-text"></slot>
        </template>
        <template #header-overlay>
          <slot name="tools" />
        </template>
      </ProjectHeaderSm>
      <ProjectHeaderMd v-else :imgUrl="headerImgUrl">
        <template #header-text>
          <slot name="header-text"></slot>
        </template>
        <template #header-overlay>
          <slot name="tools" />
        </template>
      </ProjectHeaderMd>
      <main>
        <ProjectList>
          <slot name="main" />
        </ProjectList>
      </main>
    </div>
    <slot />
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

const props = defineProps<{
  headerImgUrl: string
}>()

const router = useRouter()
const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndDown = breakpoints.smaller('md')

const lgAndUp = breakpoints.greaterOrEqual('lg')
</script>
