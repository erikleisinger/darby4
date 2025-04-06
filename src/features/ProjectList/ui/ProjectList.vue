<template>
  <div :className="lgAndUp ? 'grid grid-cols-[250px,1fr] gap-[80px]' : ''">
    <div class="mt-[40px] lg:mt-[20px]">
      <ProjectListNavItem v-for="item in items" :key="item" :item="item">
        {{ item }}
      </ProjectListNavItem>
    </div>
    <div className="   flex flex-col gap-[40px]"><slot /></div>
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
