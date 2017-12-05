<template>
    <v-app id="inspire">
        <right-menu></right-menu>

        <!-- navbar -->
        <nav-bar></nav-bar>

        <!-- Left Menu -->
        <main-menu></main-menu>

        <!-- Main content -->
        <v-content>
            <v-container fluid @click.stop="drawerRight = false">
                <router-view></router-view>
            </v-container>
        </v-content>

        <!-- Footer -->
        <v-footer color="blue-grey" class="white--text" app>
            <span>{{$store.state.app_name}}</span>
            <v-spacer></v-spacer>
            <span>&copy; {{ new Date() | moment("YYYY")}}</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import MainMenu from './components/layout/Menu.vue'
    import RightMenu from './components/layout/RightMenu.vue'
    import NavBar from './components/layout/NavBar.vue'

    //Vue.use(RightMenu);
    export default {
        name: 'app',
        data: () => ({
            mobile: window.innerWidth <= 992,
            drawerRight: false,
            left: null,

        }),
        props: {
            source: String
        },
        components: {MainMenu, RightMenu, NavBar},
        methods: {
            //
        },
        mounted() {
            this.$store.commit('right_menu', "close");
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
