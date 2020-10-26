<template>
  <v-app>
    <nuxt-link to="/domain"></nuxt-link>
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col md="6">
          <template>
            <v-card class="px-8 py-4">
              <form>
                <p class="text--primary">Ingresa el dominio de tu empresa</p>
                <validation-provider
                  v-slot="{ errors }"
                  name="domain"
                  rules="required|domain-rule"
                >
                  <v-text-field
                    v-model="domain"
                    :counter="50"
                    :error-messages="errors"
                    label="Dominio"
                    required
                  >
                  </v-text-field>
                </validation-provider>
                <v-row>
                  <v-btn class="mr-4" color="primary" @click="submit"
                    >Continue</v-btn
                  >
                  <p class="text--secondary">¿Cuál es mi Dominio?</p>
                </v-row>
              </form>
            </v-card>
            <v-row>
              <v-col md="6">
                <p>Privacy Policy · Terms of Service</p>
              </v-col>
              <v-spacer />
              <v-col>
                <p>Processes App</p>
              </v-col>
            </v-row>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, setInteractionMode } from 'vee-validate'

// Local values
const DOMAIN_REGEXP = '^[a-zA-Z0-9]*$'
const DOMAIN_MAX_LENGTH = 50

setInteractionMode('passive')
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('domain-rule', (domain) => {
  if (domain.match(DOMAIN_REGEXP) && domain.lenght <= DOMAIN_MAX_LENGTH) {
    return true
  }
  return 'This value must be a positive number'
})

export default {
  layout: 'domain',
  components: {
    ValidationProvider,
  },
  data: () => ({
    name: '',
    email: '',
    errors: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
  },
}
</script>
