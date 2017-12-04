<template>
    <v-app id="inspire">
        <right-menu></right-menu>

        <!-- navbar -->
        <v-toolbar color="red darken-4" dark fixed app clipped-right clipped-left>
            <v-toolbar-side-icon @click.stop="left = !left" v-if="mobile"></v-toolbar-side-icon>
            <v-toolbar-title>{{config.app.name}}</v-toolbar-title>
            <v-spacer></v-spacer>

            <div class="text-xs-center">
                <v-menu open-on-hover
                        offset-x
                        transition="slide-x-transition"
                        content-class="nav-menu-content"
                        :nudge-width="250">
                    <v-badge overlap color="blue" slot="activator">
                        <span slot="badge">3</span>
                        <v-icon dark class="nav-menu-icon">notifications</v-icon>
                    </v-badge>
                    <v-list>
                        <v-list-tile v-for="item in dropItems" :key="item.title">
                            <v-icon dark color="blue">message</v-icon>
                            <v-list-tile-title>
                                {{ item.title }}
                            </v-list-tile-title>

                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>

            <div class="text-xs-center">
                <v-menu open-on-hover
                        offset-x
                        :close-on-content-click="false"
                        :nudge-width="200"
                        v-model="menu"
                        content-class="nav-menu-content"
                >
                    <v-avatar slot="activator">
                        <img src="https://vuetifyjs.com/static/doc-images/john.jpg" alt="John">
                    </v-avatar>
                    <v-card>
                        <v-list>
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <img src="https://vuetifyjs.com/static/doc-images/john.jpg" alt="John">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>John Leider</v-list-tile-title>
                                    <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn
                                            icon
                                            :class="fav ? 'red--text' : ''"
                                            @click="fav = !fav"
                                    >
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-switch v-model="message" color="purple"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable messages</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-switch v-model="hints" color="purple"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable hints</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click="menu = false">Cancel</v-btn>
                            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>

            </div>

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
            dropItems: [
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me 2'}
            ],

            fav: true,
            menu: false,
            message: false,
            hints: true,
            badge: 5
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
    .fluid {
        min-height: 100%
    }

    .list li {
        cursor: pointer;
    }

    .pointer {
        cursor: pointer;
    }

    .list li:hover {
        background-color: #e5e5e5
    }

    .expansion-panel__header {
        padding: 12px 15px
    }
    .nav-menu-content{
        margin-top: 50px;
    }
    .menu__activator{
        margin-right: 15px;
    }

    .nav-menu-icon{
        font-size: 35px;
    }

</style>
