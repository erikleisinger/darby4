<template>
<section class="padding__standard-x py-[80px]  -mt-[1em]">
  <MainSectionHeader>
    What Excites Me
  </MainSectionHeader>
  <Typography tag="p" class="lg:mb-[80px] mb-12">
    I have always believed that work should be more than a paycheque. Things we create should be to better the world
    and, ultimately, make us better people. Working with other people who are passionate, excited, creators excites me
    more than anything. Does that sound like you? Give me a message below!
  </Typography>
  <MainSectionHeader>
    My Tools
  </MainSectionHeader>
  <div class="flex flex-wrap gap-6 ">
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
import { MainSectionHeader } from '@/shared/MainSection';
import { ProjectTool } from '@/entities/Project';
</script>
