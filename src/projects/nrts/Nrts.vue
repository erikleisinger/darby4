<template>
  <ProjectLayout headerImgUrl="/nrts/nrts_hero">
    <template #header-text>
      Expanding New Route Trail Solutions: A
      <span class="text-gold-500">digital debut</span> for a
      <span class="text-gold-500">growing business</span>
    </template>
    <template #tools>
      <Tools :tools="[Tool.Figma, Tool.Adobe, Tool.OpenAI, Tool.Discord]" />
    </template>
    <template #duties>
      <ProjectDuties
        :duties="[
          ProjectDuty.UIDesign,
          ProjectDuty.UXDesign,
          ProjectDuty.Strategy,
        ]"
      />
    </template>
    <template #main>
      <ProjectListItem :type="ProjectListNavType.Overview">
        <Typography tag="p">
          New Route Trail Solutions is a team of expert trail builders and
          high-end landscapers. They’ve spent years working with local
          governments, but now they wanted to expand—attracting homeowners and
          private landowners who dream of transforming their outdoor spaces. The
          problem? They had zero web presence. If new customers couldn’t find
          them, they couldn’t grow. My role was to design a landing page that
          built trust, told a compelling story, and established credibility in
          the private market.
        </Typography>
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Problem">
        <template #header>Defining the problem</template>
        <NrtsProblem />
      </ProjectListItem>

      <ImgFullWidth src="/nrts/nrts_comp" extension="gif" />

      <ProjectListItem :type="ProjectListNavType.Research">
        <template #header> Research & Strategy </template>
        <Typography tag="p">
          The ideal audience? Homeowners aged 30-55, many with young kids,
          looking to enhance their properties for recreation, relaxation, or
          long-term investment. To position New Route effectively, I focused on
          three key strategies:
        </Typography>
        <NrtsResearch />
      </ProjectListItem>

      <ProjectListItem :type="ProjectListNavType.Solution">
        <template #header> Solution </template>
        <NrtsSolution />
      </ProjectListItem>

      <ImgFullWidth src="/nrts/nrts_cards" extension="gif" />

      <ProjectListItem :type="ProjectListNavType.Impact">
        <template #header> Implementation & Impact </template>
        <NrtsImpact />
      </ProjectListItem>
      <ProjectListItem :type="ProjectListNavType.Result">
        <ImgFullWidth src="/nrts/nrts_wireframe" extension="webp" />
        <ImgFullWidth src="/nrts/nrts_walk_1" extension="gif" />
        <ImgFullWidth src="/nrts/nrts_walk_2" extension="gif" />
      </ProjectListItem>
    </template>
  </ProjectLayout>
</template>
<script setup lang="ts">
import ProjectLayout from '@/layouts/ProjectLayout.vue'
import { ProjectListItem, ProjectListNavType } from '@/features/ProjectList'

import ImgFullWidth from '@/shared/ui/ImgFullWidth.vue'
import Typography from '@/shared/Typography/Typography.vue'

import { Tools, Tool } from '@/entities/Tools'
import { ProjectDuties } from '@/entities/Duties'
import { ProjectDuty } from '@/entities/Duties/lib'
import NrtsProblem from './NrtsProblem.vue'
import NrtsResearch from './NrtsResearch.vue'
import NrtsSolution from './NrtsSolution.vue'
import NrtsImpact from './NrtsImpact.vue'
</script>
