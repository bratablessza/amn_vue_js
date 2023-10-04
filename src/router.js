import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import HelloWorld from './components/HelloWorld.vue'
import TugasPage from './components/Tugas.vue'
import TestPage from './components/Test.vue'

Vue.use(VueRouter);

const route_path = [
    {
        path: '/',
        redirect: '/Home'
    },
    { path: '/main', component: Main },
    { path: '/tugas', component: TugasPage },
    { path: '/test', component: TestPage },
    { path: '/Home', component: HelloWorld, props: { msg: "Ini Home" } }
];

export default new VueRouter({
    routes: route_path
});
