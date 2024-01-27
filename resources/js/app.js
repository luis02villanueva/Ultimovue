
require('./bootstrap');

import Vue from 'vue'
import App from './components/App.vue'

//importamos Vuesax

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css';
Vue.use(Vuesax, {

});
import vsButton from 'vuesax'


Vue.use(vsButton)



//importamos Buefy


import Buefy from 'buefy'
//
Vue.use(Buefy);

//Importamos PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
Vue.use(PrimeVue);


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Button from 'primevue/button';
Vue.component('Button', Button);
Vue.component('DataTable', DataTable);

Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('Button', Button);

import VueRouter from 'vue-router';

Vue.use(VueRouter);
import router from './router';
const app = new Vue({
    el: '#app',
    mode: 'history',
    router,
    render: h => h(App),});
