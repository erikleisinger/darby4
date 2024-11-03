<template>
  <section class="grid grid-rows[auto,1fr] padding__standard">
    <MainHeader>
      <slot name="title"></slot>
    </MainHeader>

    <slot />
  </section>
</template>
<script setup lang="ts">
import MainHeader from './MainHeader.vue'
</script>
