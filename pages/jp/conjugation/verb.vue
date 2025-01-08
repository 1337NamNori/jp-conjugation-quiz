<template>
  <div>
    <p-menubar :model="items" class="bg-transparent border-none">
      <template #item>
        <p-select v-model="selectedTerm" :options="conjugationTerms" option-label="label" option-value="value" />
      </template>
      <template #end> <app-button> Setting </app-button> </template>
    </p-menubar>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <app-card v-if="currentVerb" class="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Conjugate: {{ currentVerb.kanji }}</h2>
        <p class="mb-4">Meaning: {{ currentVerb.meaning }}</p>
        <p class="mb-4">
          Conjugate to: <span class="font-semibold">{{ selectedTermDisplayName }}</span> form
        </p>
        <form @submit.prevent="checkAnswer" class="space-y-4">
          <div>
            <label for="answer" class="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Your answer:
            </label>
            <p-input-text id="answer" v-model="userAnswer" />
          </div>
          <app-button type="submit"> Check Answer </app-button>
        </form>
        <div v-if="feedback" class="mt-4">
          <p :class="feedback.correct ? 'text-green-600' : 'text-red-600'">
            {{ feedback.message }}
          </p>
          <p v-if="!feedback.correct" class="mt-2">The correct answer is: {{ feedback.correctAnswer }}</p>
        </div>
        <app-button variant="text" @click="nextVerb"> Next Verb </app-button>
      </app-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Verb, VERBS, VERB_CONJUGATION_TYPES } from '@/constants/verbs'

type ConjugationTerm = (typeof VERB_CONJUGATION_TYPES)[number]['value']

const selectedTerm = ref<ConjugationTerm>('te')
const conjugationTerms = ref([...VERB_CONJUGATION_TYPES])

const getRandomVerb = () => {
  return VERBS[Math.floor(Math.random() * VERBS.length)] as Verb
}
const items = ref([{}])
const currentVerb = ref(getRandomVerb())
const userAnswer = ref('')
const feedback = ref(
  {} as {
    correct?: boolean
    message?: string
    correctAnswer?: string
  }
)

const checkAnswer = () => {
  const answer = getAnswer[selectedTerm.value]()
  const correct = userAnswer.value === answer
  feedback.value = {
    correct,
    message: correct ? 'Correct!' : 'Incorrect!',
    correctAnswer: answer,
  }
}

const selectedTermDisplayName = computed(() => {
  return conjugationTerms.value.find((term) => term.value === selectedTerm.value)?.name
})

const getAnswer: Record<ConjugationTerm, () => string> = {
  past: () => convertToPastForm(currentVerb.value),
  polite: () => convertToPoliteForm(currentVerb.value),
  negative: () => convertToNegativeForm(currentVerb.value),
  te: () => convertToTeForm(currentVerb.value),
  command: () => convertToCommandForm(currentVerb.value),
  conditional: () => convertToConditionalForm(currentVerb.value),
  potential: () => convertToPotentialForm(currentVerb.value),
  passive: () => convertToPassiveForm(currentVerb.value),
  causative: () => convertToCausativeForm(currentVerb.value),
  causativePassive: () => convertToCausativeForm(currentVerb.value).slice(0, -1) + 'られる',
}

const nextVerb = () => {
  let randomVerb = getRandomVerb()
  while (randomVerb.id === currentVerb.value.id) {
    randomVerb = getRandomVerb()
  }
  currentVerb.value = randomVerb
  userAnswer.value = ''
  feedback.value = {}
}
</script>
