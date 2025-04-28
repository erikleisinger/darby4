<template>
  <div class="flex flex-col gap-8">
    <Typography tag="p"
      >Through 30 minute, in-depth interviews with staff and clients, two major
      roadblocks surfaced:
    </Typography>

    <HighlightBox>
      <template #title>No support for waitlisted clients</template> Some people
      waited over a year for counselling, with no interim resources or
      guidance.</HighlightBox
    >
    <HighlightBox>
      <template #title>Scattered Information</template> Blogs, videos, and
      discussions were spread across multiple platforms.</HighlightBox
    >

    <HighlightBox>
      <template #title>A confusing, text-heavy site</template> The lack of
      structure and visuals made it hard for users to find services, understand
      the process, or even know what to do next.</HighlightBox
    >
    <Typography tag="p">
      Complicating matters, CCC was hesitant about enabling direct online
      communication, so the website had to do the heavy lifting—guiding users
      clearly to what they needed, even if they didn’t know what they needed
      themselves.
    </Typography>
  </div>
</template>
<script setup lang="ts">
import Typography from '@/shared/Typography/Typography.vue'
import HighlightBox from '@/shared/ui/HighlightBox.vue'
</script>
