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
  <HighlightBox hideArrow
    ><template #title>Bounce rate plummeted </template> from 92% to 23%
    overnight.</HighlightBox
  >
  <HighlightBox hideArrow
    ><template #title>The CCC found a new fundraising tool</template> in it’s
    website.</HighlightBox
  >
  <HighlightBox hideArrow
    ><template #title
      >The amount of clients from underrepresented communities exploded </template
    >directly due to the website’s ease of use.
  </HighlightBox>
  <Typography tag="p">
    After the launch, the numbers told a story of transformation. Google
    Analytics revealed a surge in waitlist sign-ups, proving that services were
    now clearer and more accessible. Client feedback poured in, echoing the same
    sentiment—navigating the site felt effortless, intuitive, and inviting. But
    the impact didn’t stop there. With a seamless new event ticketing feature in
    place, CCC took its fundraising efforts to the next level, channeling more
    support into vital mental health initiatives. What started as a redesign
    became a catalyst for deeper connection, greater accessibility, and
    meaningful change.
  </Typography>
</template>
