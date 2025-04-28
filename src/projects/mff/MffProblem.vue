<template>
  <div class="flex flex-col gap-8">
    <Typography tag="p">
      Early rapid user testing (thanks, Reddit!) revealed a key insight: parents
      weren’t the most engaged audience—young adults were. The common pain
      points?
    </Typography>

    <HighlightBox>
      <template #title>Gamification works</template> Traditional finance apps
      felt too dry and intimidating.</HighlightBox
    >
    <HighlightBox>
      <template #title>Immediate rewards matter</template> Saving money feels
      like a long game, but seeing a forest grow added a short-term dopamine
      boost.</HighlightBox
    >

    <HighlightBox>
      <template #title>Theory vs. execution gap</template> People understood
      common knowledge like “housing should be 20% of one’s budget,” but lacked
      a system that made it feel actionable.</HighlightBox
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
