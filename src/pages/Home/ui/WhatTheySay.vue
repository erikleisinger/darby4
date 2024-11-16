<template>
  <MainSection>
    <template #title>What People are Saying</template>

    <div class="h-full gap-[20px]">
      <div
        class="w-[100vw] flex flex-nowrap gap-[20px] px-[43px] pb-[24px] md:pb-[36px] -ml-[43px] md:px-[86px] md:ml-[-86px] lg:ml-[-140px] lg:px-[140px] overflow-x-auto md:gap-[13px] lg:gap-[24px]"
      >
        <div
          class="border-[2px] border-blue-300 rounded-md p-4 min-w-[300px] flex flex-col justify-between"
          v-for="(quote, index) in quotes"
          :key="index"
        >
          <div>
            {{ quote.text }}
          </div>

          <div
            class="mt-4 text-right"
            style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.7)"
          >
            {{ quote.author }}
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
import { MainSection } from '@/shared/MainSection'

const quotes = [
  {
    text: 'Darby combines a deep knowledge of UX fundamentals with a sincere desire to innovate. He showcases the essence of your product in creative and unexpected ways.',
    author: 'Erik, Frequent Collaborator',
  },
  {
    text: 'Darby is a fast designer who still maintains a strong attention to small details, from branding to product usability and presents professional-grade materials.',
    author: 'Iris, Founder of MyForestFund',
  },

  {
    text: 'Darby has been a truly valuable addition to our team, bringing a fresh and authentic approach to every project. He’s a thoughtful designer who really understands the power of meaningful design.',
    author: 'Federica, Founder of Fenia Communication',
  },
  {
    text: `Darby's professionalism exceeds anything I expected. He's a creative Swiss Army Knife that can specialise in any one of his tools when he has to. I love his creative eye and his flexibility to move with a project at pace through its ups and downs. He's my first call for any design project.`,
    author: 'Richard, Atlas & Orion Consulting',
  },
  {
    text: `Darby has been fantastic to collaborate with. He thoughtfully incorporated our ideas and constraints while applying his expertise to make our website both beautiful and functional. Highly recommended!`,
    author: 'Spencer Hammond, CCC',
  },
]
</script>
