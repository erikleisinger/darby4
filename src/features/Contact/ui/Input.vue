<template>
<div class="relative border-[4px] border-solid  rounded-sm  transition-all grid grid-cols-[1fr,auto] group"
  :class="errors && dirty ? 'border-red' : 'border-gray-200 focus-within:border-black'">
  <Typography tag="label" type="form-title"
    class="absolute translate-y-[-60%] left-[24px] bg-slate px-1 font-bold  left-0 "
    :class="errors && dirty ? 'text-gray-200' : 'text-gold-500'">
    {{ label }}
  </Typography>

  <input v-model="value" :aria-describedby="`errors-${id}`" :aria-invalid="!!errors" :id="id" :type="type"
    @input="dirty = true" @blur="dirty = true"
    class="bg-slate focus:outline-none focus-within:outline-none p-2 h-[50px]"></input>

  <div class="m-auto px-4" v-if="value">
    <Icon name="close" color="gold" height="30px" class="cursor-pointer hover:stroke-[white]" @click="value = ''" />
  </div>
  <Typography tag="label" type="form-title" :id="`errors-${id}`" role="alert" v-if="errors && dirty"
    class="absolute bottom-0 left-0 translate-y-[125%] left-[12px] bg-slate px-1 font-bold text-red left-0">
    {{ errors }}
  </Typography>
</div>
</template>
<script setup lang="ts">

import { computed, ref } from 'vue'
import { Typography } from '@/shared/Typography';
import { Icon } from '@/shared/Icon';
const props = defineProps<{
  errors: string | null;
  id: string;
  label: String;
  maxLength?: number;
  modelValue: string;
  type?: string;
}>()

const emit = defineEmits(['update:modelValue'])
const dirty = ref(false)


const value = computed({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emit('update:modelValue', val)
  }
})

</script>
