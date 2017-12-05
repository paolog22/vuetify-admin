const routes = [
    {
        path: '/',
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
        path: '/login',
        name: 'Login',
        component: resolve => require(['./components/Login.vue'], resolve)
    },{
        path: '/forget-password',
        name: 'ForgetPassword',
        component: resolve => require(['./components/ForgetPassword.vue'], resolve)
    },{
        path: '/reset-password',
        name: 'ResetPassword',
        component: resolve => require(['./components/ResetPassword.vue'], resolve)
    },
];
export default routes
