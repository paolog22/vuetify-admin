const routes = [
    {
        path: '/vuetify-admin/',
        name: 'HelloWorld',
        component: resolve => require(['./Layout.vue'], resolve),
        children: [
            {
                path: '',
                name: 'Home',
                component: resolve => require(['./components/Home.vue'], resolve),
                meta: {
                    title: "Dashboard",
                    forAuth: true
                }
            }
        ]
    },{
        path: '/vuetify-admin/login',
        name: 'Login',
        component: resolve => require(['./components/Login.vue'], resolve)
    },{
        path: '/vuetify-admin/forgot-password',
        name: 'ForgetPassword',
        component: resolve => require(['./components/ForgetPassword.vue'], resolve)
    },{
        path: '/vuetify-admin/reset-password',
        name: 'ResetPassword',
        component: resolve => require(['./components/ResetPassword.vue'], resolve)
    },{
        path: '/vuetify-admin/*',
        name: '404',
        component: resolve => require(['./components/404.vue'], resolve)
    },
];
export default routes
