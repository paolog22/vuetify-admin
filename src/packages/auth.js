import Vue from 'vue';
import axios from 'axios';
import config from '../config.js'
import {router} from '../main.js'
import {store} from '../main.js'

export default {
    
    isAuthenticated() {
        if (localStorage.getItem('access_token'))
            return true;
        else
            return false;
    },

    setToken(data){
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('expires_in', data.expires_in);
        localStorage.setItem('refresh_token', data.refresh_token);
    },

    destroyToken(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('roles');
        localStorage.removeItem('permissions');
        localStorage.removeItem('name');
    },

    signout() {
        this.destroyToken();

        router.push({
            path: '/login'
        })
    },


}