<template>
  <v-app-bar app>
    <!-- <v-app-bar-nav-icon @click="toggleMiniVariant"></v-app-bar-nav-icon> -->
    <v-spacer />
    <v-btn depressed>
      <v-icon left>mdi-magnify</v-icon>
      Search
    </v-btn>
    <v-btn depressed>
      <v-icon>mdi-forum</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{
        notifications ? 'mdi-bell-alert' : 'mdi-bell-outline'
      }}</v-icon>
    </v-btn>
    <!--  user information  -->
    <v-divider inset vertical></v-divider>
    <v-col class="hidden-xs-only" sm="1" md="1">
      <strong>{{ user.name }}</strong>
    </v-col>
    <v-avatar size="36px">
      <img v-if="user.avatar" alt="Avatar" :src="user.avatar" />
      <v-icon v-else :color="user.color" v-text="user.icon"></v-icon>
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      clipped: true,
      fixed: false,
      title: 'Customer Portal',
      notifications: false,
      user: {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Doe',
        color: 'red',
        icon: 'people',
      },
    }
  },
  // methods: {
  //   toggleMiniVariant() {
  //     this.$store.commit('toggle')
  //   },
  // },
}
</script>
