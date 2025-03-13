<template>
  <MainSection>
    <template #title> Work </template>
    <div class="grid gap-6 grid-cols-[repeat(auto-fill,533px)]">
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
      <Project2 backgroundImage="van">
        Building a digital hub for Vancouver AI
      </Project2>
    </div>
  </MainSection>
</template>
<script setup lang="ts">
import { MainSection } from '@/shared/MainSection'
import Project2 from './Project2.vue'
</script>
