<template>
  <form
    class="grid grid-cols-1 md:grid-cols-2 gap-12"
    @submit.prevent="onSubmit"
    v-if="showForm"
  >
    <Input
      id="name"
      label="Name"
      v-model="submission.name"
      :errors="nameErrors"
    />
    <Input
      id="email"
      label="Email"
      v-model="submission.email"
      type="email"
      :errors="emailErrors"
    />
    <Input
      id="subject"
      label="Subject"
      v-model="submission.subject"
      class="md:col-span-2"
      :errors="subjectErrors"
    />
    <TextArea
      id="message"
      label="Message"
      v-model="submission.message"
      class="md:col-span-2"
      :errors="messageErrors"
    />
    <footer class="flex justify-center w-full md:col-span-2">
      <Button
        icon="mail"
        @click.submit
        :state="buttonState"
        class="min-w-[200px]"
      >
        {{ buttonText }}
      </Button>
    </footer>
  </form>
</template>
<script setup lang="ts">
import { object, string, reach } from 'yup'
import Input from './Input.vue'
import TextArea from './TextArea.vue'
import { Button } from '@/shared/Button'
import { ref, computed } from 'vue'

type Submission = {
  name: string
  email: string
  subject: string
  message: string
}

const submission = ref<Submission>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const schema = object({
  name: string().required().max(50),
  email: string().email().required().max(50),
  subject: string().required().max(100),
  message: string().required().max(500),
})

function getValidOrError(
  schemaPart: any,
  valueName: 'name' | 'email' | 'subject' | 'message',
) {
  try {
    schemaPart.validateSync(submission.value[valueName])
    return null
  } catch (e: any) {
    return e?.message || ''
  }
}

const nameErrors = computed(() =>
  getValidOrError(reach(schema, 'name'), 'name'),
)
const emailErrors = computed(() =>
  getValidOrError(reach(schema, 'email'), 'email'),
)
const subjectErrors = computed(() =>
  getValidOrError(reach(schema, 'subject'), 'subject'),
)
const messageErrors = computed(() =>
  getValidOrError(reach(schema, 'message'), 'message'),
)

async function getMessageErrors() {
  try {
    await schema.validate(submission.value, {
      abortEarly: false,
    })

    return null
  } catch (e) {
    return e
  }
}

const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const loading = ref(false)
const success = ref(false)
async function submit(e: Event) {
  e.preventDefault()
  const errors = await getMessageErrors()
  if (errors) return
  loading.value = true
  console.log(submission.value)
  const json = JSON.stringify({
    ...submission.value,
    access_key: import.meta.env.VITE_WEB3_KEY,
  })
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: json,
  })
    // timeout(2000)
    .then(() => {
      success.value = true
      reset()
    })
    .catch(e => {
      console.log('error: ', e)
    })
    .finally(() => {
      loading.value = false
    })
}

const showForm = ref(true)

function resetSubmissionValues() {
  submission.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}
function reset() {
  resetSubmissionValues()
  showForm.value = false
  setTimeout(() => {
    showForm.value = true
  }, 1)

  setTimeout(() => {
    success.value = false
  }, 5000)
}

const buttonState = computed(() => {
  if (loading.value) return 'loading'
  if (success.value) return 'success'
  return 'default'
})

const buttonText = computed(() => {
  if (loading.value) return 'Sending...'
  if (success.value) return 'Sent!'
  return 'Send message'
})

function onSubmit(e: Event) {
  submit(e)
}
</script>
