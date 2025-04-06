<template>
  <div :data-section="type" class="flex flex-col gap-[40px] mt-8">
    <header class="-mb-2" v-if="$slots.header">
      <Typography tag="h3"><slot name="header" /></Typography>
    </header>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ProjectListNavType } from '../types'
import Typography from '@/shared/Typography/Typography.vue'
const props = defineProps<{
  type: ProjectListNavType
}>()
</script>
