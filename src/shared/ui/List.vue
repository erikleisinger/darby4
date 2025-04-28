<template>
  <ul class="ml-4 lg:ml-10 list-disc text-gold-500">
    <li class="lg:pl-2" v-for="(item, i) in listItems" :key="i">
      <span class="font-bold">
        {{ item.title }} <span class="text-white">→ </span></span
      >
      <span class="text-white"> {{ item.text }} </span>
    </li>
  </ul>
</template>
<script setup lang="ts">
interface Props {
  listItems: {
    title: string
    text: string
  }[]
}

const props = defineProps<Props>()
</script>
