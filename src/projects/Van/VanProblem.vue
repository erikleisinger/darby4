<template>
  <div class="flex flex-col gap-8">
    <Typography tag="p"> Early research uncovered key pain points: </Typography>

    <HighlightBox>
      <template #title>No Centralized Hub</template> Members relied on Kris’s
      personal site, Whatsapp, Discord or LinkedIn for updates.</HighlightBox
    >
    <HighlightBox>
      <template #title>Scattered Information</template> Blogs, videos, and
      discussions were spread across multiple platforms.</HighlightBox
    >

    <HighlightBox>
      <template #title>Limited Community Interaction</template> No easy way for
      members to connect outside of meetups without invites from other community
      members</HighlightBox
    >
    <Typography tag="p">
      Through stakeholder discussions and quick user testing, it became clear:
      this couldn’t just be an event site—it needed to be a digital home for the
      Vancouver AI community. That insight completely shifted the project’s
      direction.
    </Typography>
  </div>
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import HighlightBox from '@/shared/ui/HighlightBox.vue'
</script>
