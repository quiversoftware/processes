<template>
  <v-layout column>
    <!--    <v-flex xs12 sm8 md6>-->
    <v-row>
      <v-col md="4" xs="12">
        <h1>IM THE FUCKING INDEX</h1>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import TopFiveList from '@/components/dashboard/TopFiveList.vue'
export default {
  components: { TopFiveList },
  computed: {
    isSmall() {
      return this.$vuetify.breakpoint.smAndDown
    },
    size() {
      const size = { xs: 'x-small', sm: 'small', lg: 'large', xl: 'x-large' }[
        this.$vuetify.breakpoint.name
      ]
      return size ? { [size]: true } : {}
    }
  },
  data: () => ({
    outstanding: {
      title: 'Oustanding Payments',
      icon: 'mdi-cash',
      invoices: [
        {
          invoice_number: 346253,
          due_date: '10/04/2020',
          Amount: 6
        },
        {
          invoice_number: 233724,
          due_date: '09/05/2019',
          Amount: 10
        },
        {
          invoice_number: 34234,
          due_date: '11/08/2018',
          Amount: 31
        },
        {
          invoice_number: 134234,
          due_date: '06/04/2020',
          Amount: 25
        },
        {
          invoice_number: 745645,
          due_date: '03/11/2019',
          Amount: 198
        }
      ],
      headers: [
        { text: 'Invoice Number', value: 'invoice_number', sortable: false },
        { text: 'Due date', value: 'due_date', sortable: false },
        { text: 'Amount', value: 'Amount', sortable: false, align: 'center' },
        { text: '', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  })
}
</script>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>
