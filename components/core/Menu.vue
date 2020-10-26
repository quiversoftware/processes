<template>
  <v-navigation-drawer fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <nuxt-link to="/">
        <v-avatar size="36px">
          <v-img :src="require('@/assets/vuetify-logo.svg')" />
        </v-avatar>
      </nuxt-link>
      <nuxt-link to="/" class="text">
        Vue Admin Template
      </nuxt-link>
    </v-toolbar>
    <v-list>
      <v-list-item to="/Dashboard">
        <v-list-item-action>
          <v-icon>mdi-television-guide</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>DASHBOARD</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/company/Company">
        <v-list-item-action>
          <v-icon>mdi-television-guide</v-icon>
        </v-list-item-action>
        <v-list-item-content class="item-title">
          <v-list-item-title>Company</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group prepend-icon="mdi-newspaper">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>DIAGNÓSTICO</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="diag in diagnosis" :key="diag.id" :to="diag.link">
          <v-list-item-title
            class="item-title"
            v-text="diag.title"
          ></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="diag.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      diagnosis: [
        {
          id: 0,
          title: 'Descripción',
          icon: 'mdi-newspaper',
          link: '/diagnosis/CompanyDescription'
        },
        {
          id: 1,
          title: 'Lluvia de ideas',
          icon: 'mdi-newspaper',
          link: '/diagnosis/Brainstorm'
        },
        {
          id: 2,
          title: 'Ishikawa',
          icon: 'mdi-newspaper',
          link: '/diagnosis/Ishikawa'
        },
        {
          id: 3,
          title: 'Matriz 5W',
          icon: 'mdi-newspaper',
          link: '/diagnosis/Matrix5W'
        },
        {
          id: 4,
          title: 'Matriz 5W - 2',
          icon: 'mdi-newspaper',
          link: '/diagnosis/Matriz5W2'
        },
        {
          id: 5,
          title: 'test',
          icon: 'mdi-newspaper',
          link: '/diagnosis/test'
        }
      ]
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this
      vm.selectedIndex = selectedIndex
      return vm.$router.push({ name: routeName })
    }
  }
}
</script>

<style>
.toolbar {
  font-weight: bold;
  font-size: 18px;
}

.toolbar .text {
  padding-left: 15px;
  color: white;
  text-decoration: none;
}

.item-title {
  font-size: 17px;
  font-weight: 500;
}
.item-sub-title {
  font-size: 15px;
  font-weight: 500;
}

.active {
  font-weight: bold;
}
</style>
