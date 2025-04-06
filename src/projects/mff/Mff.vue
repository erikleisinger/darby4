<template>
  <ProjectLayout headerImgUrl="/mff/mff_hero">
    <template #header-text>
      Myforestfund: <span class="text-gold-500">Gamifying</span> Financial
      Literacy for a New Generation
    </template>
    <template #tools>
      <Tools :tools="[Tool.Figma, Tool.Adobe, Tool.OpenAI, Tool.Discord]" />
    </template>
    <template #duties>
      <ProjectDuties
        :duties="[
          ProjectDuty.UIDesign,
          ProjectDuty.UXDesign,
          ProjectDuty.Branding,
        ]"
      />
    </template>
    <template #main>
      <ProjectListItem :type="ProjectListNavType.Overview">
        <Typography tag="p">
          MyForestFund started as a financial literacy app for kids but, after
          testing, quickly pivoted to address a much bigger problem: young
          adults (20-35) struggling to build sustainable financial habits.
          Initially designed in a 48-hour hackathon, the app’s goal was to make
          personal finance feel engaging, rewarding, and actually
          doable—leveraging gamification to bridge the gap between financial
          knowledge and action. Unlike traditional finance apps that overwhelm
          users with spreadsheets and data, MyForestFund introduced a smart
          goal-setting system linked to users' bank accounts. Each financial
          milestone nurtured a virtual forest, turning progress into something
          visual and satisfying—like a blend of Stardew Valley and personal
          finance.
        </Typography>
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Problem">
        <template #header>Defining the problem</template>
        <MffProblem />
      </ProjectListItem>

      <ImgFullWidth src="/mff/mff_scroll" extension="gif" />

      <ProjectListItem :type="ProjectListNavType.Research">
        <template #header> Research & Strategy </template>
        <Typography tag="p">
          With limited time, I focused on lean, high-impact research methods:
        </Typography>
        <MffResearch />
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Solution">
        <template #header> Solution </template>

        <MffSolution />
      </ProjectListItem>

      <ImgFullWidth src="/mff/mff_game" extension="gif" />

      <ProjectListItem :type="ProjectListNavType.Impact">
        <template #header> Implementation & Launch </template>
        <MffImpact />
      </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Result">
        <ImgFullWidth src="/mff/mff_wireframe" extension="webp" />
        <ImgFullWidth src="/mff/mff_walk_1" extension="gif" />
        <ImgFullWidth src="/mff/mff_walk_2" extension="gif" />
      </ProjectListItem>
    </template>
  </ProjectLayout>
</template>
<script setup lang="ts">
import ProjectLayout from '@/layouts/ProjectLayout.vue'
import { ProjectListItem, ProjectListNavType } from '@/features/ProjectList'
import MffProblem from './MffProblem.vue'
import MffResearch from './MffResearch.vue'
import MffSolution from './MffSolution.vue'
import ImgFullWidth from '@/shared/ui/ImgFullWidth.vue'
import Typography from '@/shared/Typography/Typography.vue'
import MffImpact from './MffImpact.vue'

import { Tools, Tool } from '@/entities/Tools'
import { ProjectDuties } from '@/entities/Duties'
import { ProjectDuty } from '@/entities/Duties/lib'
</script>
