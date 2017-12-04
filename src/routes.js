
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: resolve => require(['./components/HelloWorld.vue'], resolve)
      }
];
export default routes