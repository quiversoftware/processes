<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="stepNumber" vertical>
          <template v-for="step in steps">
            <v-stepper-step
              :key="`${step.index}-step`"
              :step="step.index"
              :complete="stepNumber > step.index"
              label="..."
              editable
            >
              {{ step.title }}
            </v-stepper-step>
            <v-stepper-content
              :key="`${step.index}-content`"
              :step="step.index"
            >
              <v-textarea
                solo
                outlined
                :name="step.name"
                label="..."
              ></v-textarea>
              <v-btn color="primary" @click="stepNumber = step.index + 1">
                Continue
              </v-btn>
            </v-stepper-content>
          </template>
        </v-stepper>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet elevation="3">
          <v-row justify="center">
            <v-col cols="12" md="11">
              <v-textarea name="input-step-4" label=""></v-textarea>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CompanyDescription',
  data() {
    return {
      stepNumber: 1,
      steps: [
        {
          index: 1,
          name: '',
          title: '¿A qué se dedica la empresa?',
        },
        {
          index: 2,
          name: '',
          title: 'Giro de la empresa',
        },
        {
          index: 3,
          name: '',
          title: 'Misión de la empresa?',
        },
        {
          index: 4,
          name: '',
          title: 'Visión de la empresa',
        },
      ],
    }
  },
}
</script>
