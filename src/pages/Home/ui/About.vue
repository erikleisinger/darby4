<template>
  <section class="padding__standard-x py-[80px] -mt-[1em]">
    <MainSectionHeader> What Excites Me </MainSectionHeader>
    <Typography tag="p" class="lg:mb-[80px] mb-12 max-w-[80ch]">
      I believe that design should be more than just work—it should make a
      difference. I’m passionate about working with innovators who are driven to
      make a positive impact and build meaningful, user-centered products.
      Collaborating with like-minded creators who value authenticity and purpose
      is what truly inspires my work. If you're looking for a UX designer who
      values purpose and impact as much as you do, let’s connect. Reach out
      below to start your project!"
    </Typography>
    <MainSectionHeader> My Tools </MainSectionHeader>
    <div class="flex flex-wrap gap-6">
      <ProjectTool tool="figma" iconOnly color="gold" />
      <ProjectTool tool="adobe" iconOnly color="gold" />
      <ProjectTool tool="openAi" iconOnly color="gold" />
      <ProjectTool tool="miro" iconOnly color="gold" />
      <ProjectTool tool="discord" iconOnly color="gold" />
      <ProjectTool tool="zoom" iconOnly color="gold" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
import { Tag } from '@/shared/Tag'
import { MainSectionHeader } from '@/shared/MainSection'
import { ProjectTool } from '@/entities/Project'
</script>
