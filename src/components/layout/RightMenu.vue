<template>
  <div>
      <v-navigation-drawer fixed v-model="$store.state.right_open" :stateless="right" right clipped app>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Put something here</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'right-menu',
        //props: ['drawerRight'],
        data: () => ({
            right: null,
            //drawerRight: false
        }),
        mounted(){
          //this.$store.commit('right_menu', "close");
          //this.drawerRight = this.$store.state.right_open;
        }
    }
</script>