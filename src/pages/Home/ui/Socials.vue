<template>
<div class="flex gap-4 justify-center">
  <Icon name="linkedIn" color="white" class="cursor-pointer" @click="goTo('https://www.linkedin.com/in/darbyyule/')">
  </Icon>
  <Icon name="dribbble" color="white" class="cursor-pointer" @click="goTo('https://dribbble.com/darbyyule')"></Icon>
  <Icon name="instagram" color="white" class="cursor-pointer"
    @click="goTo('https://www.instagram.com/mynameis_darby/')"></Icon>
</div>
</template>
<script lang="ts" setup>
import { Icon } from '@/shared/Icon'

function goTo(url: string) {
  window.open(url, '_blank')
}
</script>
