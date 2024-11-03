<template>
  <div class="bg-white text-black p-2">
    <Typography tag="h3" class="-mt-2">
      <slot />
    </Typography>
  </div>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
</script>
