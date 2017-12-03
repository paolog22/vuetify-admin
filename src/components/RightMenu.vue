<template>
  <div>
      <v-navigation-drawer fixed v-model="drawerRight" :stateless="right" right clipped app>
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
    export default {
        name: 'main-menu',
        props: ['drawerRight'],
        data: () => ({
            right: null
        }),
    }
</script>