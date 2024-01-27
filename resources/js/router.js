
import Dashboard from './components/Dashboard.vue'
import ListCategoria from './components/Categorias/Index.vue'

import VueRouter from 'vue-router';
const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/cagetorias',
        name: 'categorias',
        component: ListCategoria,
    },

];
const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;