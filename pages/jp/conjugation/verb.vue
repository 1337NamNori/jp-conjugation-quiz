<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Conjugation Terms</h2>
        <p-menu :model="menuItems" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold mb-6">Japanese Verb Conjugation Practice</h1>
      <div v-if="currentVerb" class="bg-white shadow-md rounded-lg p-6 max-w-md">
        <h2 class="text-2xl font-semibold mb-4">Conjugate: {{ currentVerb.dictionary }}</h2>
        <p class="mb-4">Meaning: {{ currentVerb.meaning }}</p>
        <p class="mb-4">
          Conjugate to: <span class="font-semibold">{{ selectedTerm }}</span> form
        </p>
        <form @submit.prevent="checkAnswer" class="space-y-4">
          <div>
            <label for="answer" class="block text-sm font-medium text-gray-700"> Your answer: </label>
            <p-input-text id="answer" v-model="userAnswer" />
          </div>
          <p-button type="submit"> Check Answer </p-button>
        </form>
        <div v-if="feedback" class="mt-4">
          <p :class="feedback.correct ? 'text-green-600' : 'text-red-600'">
            {{ feedback.message }}
          </p>
          <p v-if="!feedback.correct" class="mt-2">The correct answer is: {{ feedback.correctAnswer }}</p>
        </div>
        <p-button @click="nextVerb"> Next Verb </p-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const conjugationTerms = ['て', 'た', 'ない', 'な', 'させる'] as const

type ConjugationTerm = (typeof conjugationTerms)[number]

const selectedTerm = ref<ConjugationTerm>('て')

const verbs = [
  {
    dictionary: '食べる',
    meaning: 'to eat',
    conjugations: {
      て: '食べて',
      た: '食べた',
      ない: '食べない',
      な: '食べな',
      させる: '食べさせる',
    },
  },
  {
    dictionary: '行く',
    meaning: 'to go',
    conjugations: {
      て: '行って',
      た: '行った',
      ない: '行かない',
      な: '行くな',
      させる: '行かせる',
    },
  },
  {
    dictionary: '見る',
    meaning: 'to see',
    conjugations: {
      て: '見て',
      た: '見た',
      ない: '見ない',
      な: '見な',
      させる: '見させる',
    },
  },
]

const currentVerb = ref(getRandomVerb())
const userAnswer = ref('')
const feedback = ref(
  {} as {
    correct?: boolean
    message?: string
    correctAnswer?: string
  }
)

const menuItems = ref(
  conjugationTerms.map((term) => ({
    label: term,
    command: () => selectTerm(term),
  }))
)

function getRandomVerb() {
  return verbs[Math.floor(Math.random() * verbs.length)]
}

function selectTerm(term: ConjugationTerm) {
  selectedTerm.value = term
  nextVerb()
}

function checkAnswer() {
  const correct = userAnswer.value === currentVerb.value?.conjugations[selectedTerm.value]
  feedback.value = {
    correct,
    message: correct ? 'Correct!' : 'Incorrect. Try again!',
    correctAnswer: currentVerb.value?.conjugations[selectedTerm.value],
  }
}

function nextVerb() {
  currentVerb.value = getRandomVerb()
  userAnswer.value = ''
  feedback.value = {}
}
</script>
