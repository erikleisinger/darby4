<template>
<component :is="tag" :class="classes">
  <slot />
</component>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import {getTypographyClass} from './getTypographyClass'
const props = defineProps<{
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span' | 'div'
  type?: string
}>()

const classes = computed(() => getTypographyClass({
  tag: props.tag,
  type: props.type
}))
</script>
