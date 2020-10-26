<template>
  <v-container>
    <v-sheet>
      <v-container>
        <h2 class="text--secondary">Matriz 5W 2H</h2>
        <v-divider></v-divider>
        <v-row
          justify="center"
          align="center"
          v-for="question in questions"
          :key="'question_' + question.id"
        >
          <v-col cols="12" md="10">
            <v-sheet>
              <v-card>
                <v-sheet class="white--text" height="50px" color="primary">
                  <v-card-title>
                    {{ question.question }}
                  </v-card-title>
                </v-sheet>
                <v-card-text>
                  <v-textarea :name="'5w-col' + index" label="">
                    {{ question.answer }}
                  </v-textarea>
                </v-card-text>
              </v-card>
            </v-sheet>
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
      questions: [
        { id: 0, question: '¿Qué hacer?', answer: '' },
        { id: 1, question: '¿Por qué hacerlo?', answer: '' },
        { id: 2, question: '¿Cómo hacerlo?', answer: '' },
        { id: 3, question: '¿Quién debe hacerlo?', answer: '' },
        { id: 4, question: '¿Dónde hacerlo?', answer: '' },
        { id: 5, question: '¿Cuándo hacerlo?', answer: '' },
        { id: 6, question: '¿Cuánto vale hacerlo?', answer: '' }
      ]
    }
  }
}
</script>

<style>
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
