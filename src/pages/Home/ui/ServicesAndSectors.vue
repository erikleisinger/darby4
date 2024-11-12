<template>
  <section class="padding__standard-x py-[80px] -mt-[1em]">
    <MainSectionHeader> Services </MainSectionHeader>
    <div class="flex flex-wrap gap-4 lg:mb-[80px] mb-12" ref="section1">
      <Tag
        color="gold"
        class="tag"
        v-for="(tag, index) in section1Tags"
        :key="tag"
        :class="{
          'animated-tag': animateSection1,
        }"
        :style="{
          animationDelay: `${index * 0.1}s`,
        }"
      >
        {{ tag }}
      </Tag>
    </div>
    <MainSectionHeader> Sectors </MainSectionHeader>
    <div class="flex flex-wrap gap-4" ref="section2">
      <Tag
        color="blue"
        class="tag"
        v-for="(tag, index) in section2Tags"
        :key="tag"
        :class="{
          'animated-tag': animateSection2,
        }"
        :style="{
          animationDelay: `${index * 0.1}s`,
        }"
        >{{ tag }}</Tag
      >
    </div>
  </section>
</template>
<style lang="scss"scoped>
.tag {
  transform: translateX(20%);
  opacity: 0;
  &.animated-tag {
    animation: fadeIn 0.3s ease-in-out forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { Typography } from '@/shared/Typography'
import { Tag } from '@/shared/Tag'
import { MainSectionHeader } from '@/shared/MainSection'
import { useElementVisibility } from '@vueuse/core'

const section1 = ref(null)
const section2 = ref(null)

const section1Visible = useElementVisibility(section1)
const section2Visible = useElementVisibility(section2)

const animateSection1 = ref(false)
const animateSection2 = ref(false)

watch(section1Visible, val => {
  if (val) {
    animateSection1.value = true
  }
})

watch(section2Visible, val => {
  if (val) {
    animateSection2.value = true
  }
})

const section1Tags = [
  'UI & UX Design',
  'Mobile Design',
  'Content Design',
  'Branding',
  'Web Design',
  'Landing Page Design',
]

const section2Tags = ['SaaS', 'eCommerce', 'Entertainment', 'NGO']
</script>
