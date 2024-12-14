<script setup lang="ts">
import { INIT_ANALYTICS } from '@/shared/utils/analytics'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Layout from '@/app/Layout.vue'

onMounted(() => {
  INIT_ANALYTICS()
})
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
