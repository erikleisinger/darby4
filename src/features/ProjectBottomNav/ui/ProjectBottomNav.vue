<template>
  <div class="flex justify-between p-8 md:p-8 md:px-16">
    <button @click="goPrev" class="flex gap-4 items-center">
      <Icon name="leftArrow" color="white" />
      <Typography type="body" tag="p" class="underline">Back</Typography>
    </button>
    <button @click="goNext" class="flex gap-4 items-center">
      <Typography type="body" tag="p" class="underline">Next</Typography>
      <Icon name="rightArrow" color="white" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { PROJECT_ORDER } from '@/projects/project-order'
import Arrow from '@/shared/Icon/Arrow.vue'
import BackArrow from '@/shared/Icon/BackArrow.vue'
import Icon from '@/shared/Icon/Icon.vue'
import Typography from '@/shared/Typography/Typography.vue'
import { computed } from 'vue'

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

const currentRoute = computed(() => route.params.project)

const currentRouteIndex = computed(() =>
  PROJECT_ORDER.indexOf(currentRoute.value),
)

const router = useRouter()
function goPrev() {
  if (currentRouteIndex.value === 0) {
    router.push({
      path: `/${PROJECT_ORDER[PROJECT_ORDER.length - 1]}`,
    })
  } else {
    router.push({
      path: `/${PROJECT_ORDER[currentRouteIndex.value - 1]}`,
    })
  }
}

function goNext() {
  if (currentRouteIndex.value === PROJECT_ORDER.length - 1) {
    router.push({
      path: `/${PROJECT_ORDER[0]}`,
    })
  } else {
    router.push({
      path: `/${PROJECT_ORDER[currentRouteIndex.value + 1]}`,
    })
  }
}
</script>
