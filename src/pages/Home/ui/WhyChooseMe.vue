<template>
<div style="backgroundImage: url('/whyme.png')" class="relative bg-cover bg-[70%]">
  <div
    class="absolute top-0 bottom-0 left-[16px] right-[16px] mx-auto md:mx-[unset] md:left-[60px] lg:left-[140px] my-auto h-fit w-fit md:right-[24px] md:max-w-[60%]  bg-white/50 rounded-md lg:p-[24px] md:p-[16px] p-[16px]">
    <Typography tag="h2" class="text-slate">
      Why choose me?
    </Typography>
    <div class="p-4 pb-0 grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-4">
      <div class="flex gap-6 items-center">
        <Icon name="crane" />
        <Typography tag="p" type="body" class="text-slate font-bold">Authentic & Genuine Design</Typography>
      </div>
      <div class="flex gap-6 items-center">
        <Icon name="monitor" />
        <Typography tag="p" type="body" class="text-slate font-bold">Content First Approach</Typography>
      </div>
      <div class="flex gap-6 items-center">
        <Icon name="connection" />
        <Typography tag="p" type="body" class="text-slate font-bold">Genuine Connection With Customers</Typography>
      </div>
      <div class="flex gap-6 items-center">
        <Icon name="data" />
        <Typography tag="p" type="body" class="text-slate font-bold">Data Centred Decision Making</Typography>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { Typography } from '@/shared/Typography';
import { Icon } from '@/shared/Icon';
</script>
