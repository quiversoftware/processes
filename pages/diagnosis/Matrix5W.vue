<template>
  <v-container>
    <v-sheet>
      <v-container>
        <h2 class="text--secondary">Matriz 5W 2H</h2>
        <v-divider></v-divider>
        <v-row justify="center" align="center" dense>
          <v-col v-for="question in questions" :key="'question_' + question.id">
            <v-card color="primary">
              <v-card-subtitle class="text-center" style="color: white">
                {{ question.question }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" dense>
          <v-col
            v-for="(question, index) in questions"
            :key="'answer_' + question.id"
          >
            <v-textarea
              solo
              outlined
              :name="'5w-col' + index"
              :rows="textareaHeight"
            >
              {{ question.answer }}
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'Matrix5W',
  data() {
    return {
      textareaHeight: 16,
      questions: [
        { id: 0, question: '¿Qué hacer?', answer: '' },
        { id: 1, question: '¿Por qué hacerlo?', answer: '' },
        { id: 2, question: '¿Cómo hacerlo?', answer: '' },
        { id: 3, question: '¿Quién debe hacerlo?', answer: '' },
        { id: 4, question: '¿Dónde hacerlo?', answer: '' },
        { id: 5, question: '¿Cuándo hacerlo?', answer: '' },
        { id: 6, question: '¿Cuánto vale hacerlo?', answer: '' },
      ],
      submenu: [
        { id: 0, title: '' },
        { id: 1, title: 'D. Gestión por procesos' },
        { id: 2, title: 'D. Gestión de las operaciones' },
        { id: 3, title: 'D. Gestión de la calidad' },
        { id: 4, title: 'D. Gestión del desempeño laboral' },
      ],
    }
  },
}
</script>

<style>
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
