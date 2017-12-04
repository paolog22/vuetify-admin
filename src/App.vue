<template>
  <v-app id="inspire">
    <right-menu></right-menu>

    <!-- navbar -->
    <v-toolbar color="red darken-4" dark fixed app clipped-right clipped-left>
      <v-toolbar-side-icon @click.stop="left = !left" v-if="mobile"></v-toolbar-side-icon>
      <v-toolbar-title>{{config.app.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon class="pointer" @click.stop="$store.state.right_open = !$store.state.right_open">more_vert</v-icon>
    </v-toolbar>

    <!-- Left Menu -->
    <main-menu :left.sync="left"></main-menu>

    <!-- Main content -->
    <v-content>
      <v-container fluid @click.stop="drawerRight = false">
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer color="blue-grey" class="white--text" app>
      <span>{{config.app.name}}</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date() | moment("YYYY")}}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import MainMenu from './components/Menu.vue'
  import RightMenu from './components/RightMenu.vue'
  import config from './config.js'
  import menu_items from './menu.js';

//Vue.use(RightMenu);
  export default {
    name: 'app',
    data: () => ({
      menu_items: menu_items,
      config: config,
      mobile: window.innerWidth <= 992,
      drawerRight: false,
      left: null,
      mini: true,
    }),
    props: {
      source: String
    },
    components: {MainMenu, RightMenu},
    methods: {
      //
    },
    mounted() {
      this.$store.commit('right_menu', "close");
      //console.log(menu_items);
    }
  }
</script>

<style>
.fluid{
  min-height: 100%
}

.list li{
  cursor: pointer;
}

.pointer{
  cursor: pointer;
}

.list li:hover{
  background-color: #e5e5e5
}

.expansion-panel__header{
  padding: 12px 15px
}

</style>
