<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="stepNumber" vertical>
          <v-stepper-step step="1" :complete="stepNumber > 1" editable>
            ¿A qué se dedica la empresa?
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-textarea
              solo
              outlined
              name="input-step-1"
              label="..."
            ></v-textarea>
            <v-btn color="primary" @click="stepNumber = 2">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-step step="2" :complete="stepNumber > 2" editable>
            ¿Cuál es el objetivo?
          </v-stepper-step>
          <v-stepper-content step="2">
            <v-textarea
              solo
              outlined
              name="input-step-2"
              label="..."
            ></v-textarea>
            <v-btn color="primary" @click="stepNumber = 3">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-step step="3" :complete="stepNumber > 3" editable>
            ¿Cuál es la visión?
          </v-stepper-step>
          <v-stepper-content step="3">
            <v-textarea
              solo
              outlined
              name="input-step-3"
              label="..."
            ></v-textarea>
            <v-btn color="primary">Continue</v-btn>
          </v-stepper-content>
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
      stepNumber: 1
    }
  }
}
</script>
