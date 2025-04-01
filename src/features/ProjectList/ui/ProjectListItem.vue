<template>
  <div class="min-h-[500px]" :data-section="type">
    {{ type }}
  </div>
</template>
<script setup lang="ts">
import { ProjectListNavType } from '../types'

const props = defineProps<{
  type: ProjectListNavType
}>()
</script>
