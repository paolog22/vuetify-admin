<template>
    <v-toolbar color="red darken-4" dark fixed app clipped-right clipped-left>
        <v-toolbar-side-icon @click.stop="$store.state.left_open = !$store.state.left_open" v-if="$store.state.isMobile"></v-toolbar-side-icon>
        <v-toolbar-title v-if="!$store.state.isMobile">{{$store.state.app_name}}</v-toolbar-title>
        <v-spacer></v-spacer>

        <div class="text-xs-center">
            <v-menu open-on-hover
                    offset-x
                    transition="slide-x-transition"
                    content-class="nav-menu-content"
                    :nudge-width="250">
                <v-badge overlap color="blue" slot="activator">
                    <span slot="badge">{{dropItems.length}}</span>
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
                        <router-link to="/login" tag="button"><v-btn color="primary" flat @click="menu = false">Logout</v-btn></router-link>

                    </v-card-actions>
                </v-card>
            </v-menu>

        </div>

        <v-icon class="pointer" @click.stop="$store.state.right_open = !$store.state.right_open">more_vert</v-icon>

    </v-toolbar>
</template>

<script>
    import config from '../../config.js'
    export default {
        name: 'nav-bar',
        data: () => ({
            config: config,
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
    }
</script>
