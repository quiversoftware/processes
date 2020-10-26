<template>
  <v-navigation-drawer
    v-model="getMiniVariant"
    permanent
    expand-on-hover
    width="20%"
    app
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="require('../../assets/icons/process-icon.png')"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{ toolbarTitle }}</v-list-item-title>
        <!-- 
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item to="/company/Company">
        <v-list-item-action>
          <v-icon>mdi-television-guide</v-icon>
        </v-list-item-action>
        <v-list-item-content class="item-title">
          <v-list-item-title>Company</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group :value="true">
        <template v-slot:activator>
          <v-list-item-title>DIAGNÓSTICO</v-list-item-title>
        </template>

        <template v-for="diag in diagnosis">
          <v-list-item
            v-if="!diag.submenus"
            :key="`${diag.id}-menu`"
            :to="diag.link"
          >
            <v-list-item-icon>
              <v-icon v-text="diag.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title class="item-title" v-text="diag.title">
            </v-list-item-title>
          </v-list-item>

          <template v-if="diag.submenus">
            <v-list-group
              :key="`${diag.id}-menu`"
              v-model="diag.active"
              :value="true"
              sub-group
              no-action
              dense
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ diag.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon v-text="diag.icon"></v-icon>
                </v-list-item-icon>
              </template>
              <v-list-item
                v-for="submenu in diag.submenus"
                :key="`${submenu.id}-submenu`"
                :to="submenu.link"
                dense
              >
                <v-list-item-content>
                  <v-list-item-title v-text="submenu.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </template>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 1,
      toolbarTitle: 'Process Improvements',
      mini: true,
      diagnosis: [
        {
          id: 0,
          title: 'Descripción',
          icon: 'mdi-newspaper',
          link: '/diagnosis/CompanyDescription',
        },
        {
          id: 1,
          title: 'Lluvia de ideas',
          icon: 'mdi-newspaper',
          link: '/diagnosis/Brainstorming',
        },
        {
          id: 2,
          title: 'Ishikawa',
          icon: 'mdi-newspaper',
          link: '/diagnosis/Ishikawa',
        },
        {
          id: 3,
          title: '5W',
          icon: 'mdi-newspaper',
          active: false,
          submenus: [
            {
              id: 0,
              title: 'Matriz 5W',
              icon: 'mdi-newspaper',
              link: '/diagnosis/Matrix5W',
            },
            {
              id: 1,
              title: 'Gestión estratégica',
              icon: 'mdi-newspaper',
              link: '/diagnosis/Matrix5Ws',
            },
            {
              id: 2,
              title: 'Gestión por procesos',
              icon: 'mdi-newspaper',
              link: '/diagnosis/Matrix5Ws',
            },
            {
              id: 3,
              title: 'Gestión de las operaciones',
              icon: 'mdi-newspaper',
              link: '/diagnosis/Matrix5Ws',
            },
            {
              id: 4,
              title: 'Gestión  de la calidad',
              icon: 'mdi-newspaper',
              link: '/diagnosis/Matrix5Ws',
            },
            {
              id: 4,
              title: 'Gestión del desempeño laboral',
              icon: 'mdi-newspaper',
              link: '/diagnosis/Matrix5Ws',
            },
          ],
        },
      ],
    }
  },

  // computed: {
  //   getMiniVariant() {
  //     return this.$store.getters.getMiniVariant
  //   },
  // },
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

.active {
  font-weight: bold;
}

.color {
  background-color: #f5f5f5;
}
</style>
