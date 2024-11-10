<template><img :src="example.url" class="md:max-w-[550px] md:max-h-[315px]" @click.stop="toggleZoom" />
<Teleport to="body">
  <div class="fixed inset-0 z-30 example__view overflow-hidden POPOVER" v-if="viewFull" @click="viewFull = false">
    <div class="absolute inset-4 md:inset-8 m-auto h-fit POPOVER " @click.stop>
      <img :src="zoomUrl()" @click.stop class="POPOVER mx-auto" />
    </div>

  </div>
</Teleport>
</template>
<style lang="scss" scoped>
.example__view {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  animation: fade-in 0.3s forwards;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import type { ProjectExample } from '@/shared/config/projects';

const props = defineProps<{
  example: ProjectExample
}>()

const viewFull = ref(false)

function zoomUrl() {
  const [title, suffix] = props.example.url.split('.')
  return title + '_zoom.' + suffix
}

function toggleZoom() {
  if (props.example.preventZoom) return;
  viewFull.value = true;
}


</script>
