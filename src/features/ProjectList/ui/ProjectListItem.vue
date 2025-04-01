<template>
  <div :data-section="type" class="flex flex-col gap-[40px]">
    <header class="-mb-6">
      <Typography tag="h3" v-if="$slots.header"
        ><slot name="header"
      /></Typography>
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
