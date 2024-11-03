<template><img :src="example.url" class="md:max-w-[550px] md:max-h-[315px]" /></template>
<script setup lang="ts">
import type { ProjectExample } from '@/shared/config/projects';

const props = defineProps<{
  example: ProjectExample
}>()
</script>
