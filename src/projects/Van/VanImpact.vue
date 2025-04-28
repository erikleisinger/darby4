<script setup lang="ts">
import HighlightBox from '@/shared/ui/HighlightBox.vue'
import Typography from '@/shared/Typography/Typography.vue'
import List from '@/shared/ui/List.vue'
const listItems = [
  {
    title: 'Directory Sign-ups',
    text: `How many members join?`,
  },
  {
    title: `Event Sales`,
    text: `Are ticket conversions improving?`,
  },
  {
    title: `Time on Site`,
    text: `Are users engaging with resources?`,
  },
]
</script>

<template>
  <HighlightBox
    ><template #title>Meetup Testing</template>Live feedback from attendees to
    refine content and usability.</HighlightBox
  >
  <HighlightBox
    ><template #title>Soft Launch with the Community</template>Gathered early
    input before full rollout.</HighlightBox
  >
  <HighlightBox
    ><template #title>Iterative Adjustments </template>Tweaked design and
    content based on real engagement patterns.</HighlightBox
  >
  <Typography tag="p">
    Since the site is still in early stages, data tracking is the next big
    priority.
    <List :list-items="listItems"> </List>
    We’re also integrating Google Analytics & AI-driven analytics to surface
    deeper insights beyond basic numbers.
  </Typography>
</template>
