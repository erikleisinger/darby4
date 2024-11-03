<template>
<section class="padding__standard-x py-[80px]  -mt-[1em]">
  <MainSectionHeader>
    Services
  </MainSectionHeader>
  <div class="flex flex-wrap gap-4 lg:mb-[80px] mb-12">
    <Tag color="gold">
      UI & UX Design
    </Tag>
    <Tag color="gold">
      Mobile Design
    </Tag>
    <Tag color="gold">
      Content Design
    </Tag>
    <Tag color="gold">
      Branding
    </Tag>
    <Tag color="gold">
      Web Design
    </Tag>
    <Tag color="gold">
      Landing Page Design
    </Tag>
  </div>
  <MainSectionHeader>
    Sectors
  </MainSectionHeader>
  <div class="flex flex-wrap gap-4">
    <Tag color="blue">SaaS</Tag>
    <Tag color="blue">eCommerce</Tag>
    <Tag color="blue">Entertainment</Tag>
    <Tag color="blue">NGO</Tag>
  </div>
</section>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
import { Tag } from '@/shared/Tag'
import { MainSectionHeader } from '@/shared/MainSection';
</script>
