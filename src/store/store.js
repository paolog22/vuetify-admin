import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
Vue.use(Vuex);

//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        left_open: false,
        right_open: false,
        preloader: true,
        isMobile: window.innerWidth <= 992,
        app_name: 'Vuetify Admin',
        api: {
            url: 'http://api.example.com',
            client_id: 2,
            client_secret: 'xxxxxxxx',
        },
        user: {
            name: "Ayesha",
            picture: require("../assets/img/authors/prf4.jpg"),
            job: "Project Manager"
        },
        cal_events: [{
            id: 0,
            title: 'Office',
            start: '2017-04-30',
            end: '2017-04-30'
        }, {
            id: 1,
            title: 'Holidays',
            start: '2017-04-01',
            end: '2017-04-01'
        }]
    },
    mutations: mutations
});
//=======vuex store end===========
export default store
