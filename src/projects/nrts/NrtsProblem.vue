<template>
  <div class="flex flex-col gap-8">
    <Typography tag="p">
      Through competitive research, I identified two major gaps:
    </Typography>

    <HighlightBox>
      <template #title
        >Trail-building companies were scarce in Western Canada.</template
      >Most similar businesses were based in Ontario, leaving a big market
      opportunity.</HighlightBox
    >
    <HighlightBox>
      <template #title>Local landscapers weren’t selling a lifestyle.</template>
      Most companies focused purely on services, but New Route had an authentic
      story to tell. As mountain bikers and craftsmen, they could connect with
      customers looking for functional, beautiful outdoor spaces—designed by
      people who actually live the lifestyle. boost.</HighlightBox
    >
  </div>
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import HighlightBox from '@/shared/ui/HighlightBox.vue'
</script>
