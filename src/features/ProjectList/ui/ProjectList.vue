<template>
  <div :class="lgAndUp ? 'grid grid-cols-[250px,1fr] gap-16' : ''">
    <div class="mt-12">
      <ProjectListNavItem v-for="item in items" :key="item" :item="item">
        {{ item }}
      </ProjectListNavItem>
    </div>
    <div class="flex flex-col gap-8 mt-8"><slot /></div>
  </div>
</template>
<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ProjectListNavType } from '../types'
import ProjectListNavItem from './ProjectListNavItem.vue'

const items = Object.values(ProjectListNavType)
const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndUp = breakpoints.greaterOrEqual('lg')
</script>
