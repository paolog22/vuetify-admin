<template>
    <v-app id="inspire">
        <router-view></router-view>
    </v-app>
</template>

<script>
    /*mport Vue from 'vue'
    import MainMenu from './components/Menu.vue'
    import RightMenu from './components/RightMenu.vue'
    import config from './config.js'
    import menu_items from './menu.js';
*/
    //Vue.use(RightMenu);
    export default {
        name: 'app',
        data: () => ({
            /*menu_items: menu_items,
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
            badge: 5*/
        }),
        props: {
            /*source: String*/
        },
        components: {/*MainMenu, RightMenu*/},
        methods: {
            //
        },
        mounted() {
            //this.$store.commit('right_menu', "close");
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
