<template>
  <v-app :fullscreen="$vuetify.breakpoint.mobile">
    <Menu />
    <AppBar />
    <v-main class="color">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import Menu from '@/components/core/Menu.vue'

export default {
  components: {
    AppBar,
    Menu,
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      notifications: false,
      items: [],
    }
  },
}
</script>
<style>
.color {
  background-color: #ebeef0;
}
</style>
