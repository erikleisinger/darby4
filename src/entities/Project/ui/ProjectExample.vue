<template><img :src="example.url" class="md:max-w-[550px] md:max-h-[315px] cursor-pointer" @click.stop="toggleZoom(true)" />
<Teleport to="body">
  <div class="fixed inset-0 z-30 example__view overflow-hidden POPOVER flex items-center justify-center p-4 md:p-8"
    v-if="viewFull" @click="toggleZoom(false)">

    <img :src="zoomUrl()" @click.stop class="POPOVER max-h-full w-fit m-auto " />


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
import { ref, computed } from 'vue';
import type { ProjectExample } from '@/shared/config/projects';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps<{
  example: ProjectExample
}>()



function zoomUrl() {
  const [title, suffix] = props.example.url.split('.')
  return title + '_zoom.' + suffix
}
const router = useRouter()
const route = useRoute()
function toggleZoom(bool: boolean) {
  if (props.example.preventZoom) return;

  if (bool) {
    router.push({ name: 'home', params: { project: route.params.project }, hash: `#view-${zoomUrl()}` })
  } else {
    router.push({ name: 'home', params: { project: route.params.project }, })
  }

}



const viewFull = computed(() => route.hash === `#view-${zoomUrl()}`)


</script>
