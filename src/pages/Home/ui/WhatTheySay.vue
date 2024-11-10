<template>
<MainSection>
  <template #title>What People are Saying</template>

  <div class=" h-full gap-[20px]">
    <div
      class=" w-[100vw]  flex flex-nowrap gap-[20px] px-[43px] pb-[24px] md:pb-[36px] -ml-[43px] md:px-[86px] md:ml-[-86px] lg:ml-[-140px] lg:px-[140px] overflow-x-auto md:gap-[13px] lg:gap-[24px]">
      <div class="border-[2px] border-blue-300 rounded-md p-4 min-w-[300px]">
        ‘Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit
        amet sapien.’
      </div>
      <div class="border-[2px] border-blue-300 rounded-md p-4 min-w-[300px]">
        ‘Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit
        amet sapien.’
      </div>
      <div class="border-[2px] border-blue-300 rounded-md p-4 min-w-[300px]">
        ‘Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit
        amet sapien.’
      </div>
    </div>
  </div>
</MainSection>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography'
import { MainSection } from '@/shared/MainSection';

</script>
