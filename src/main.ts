import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Datatable from 'vue2-datatable-component';
import BootstrapVue from 'bootstrap-vue';
import msplit from 'msplit';
import App from './App.vue';
import Home from './Home.vue';
import TableTest from './TableTest.vue';
import TreeViewItem from './components/TreeViewItem.vue';
import { codemirror } from 'vue-codemirror-lite';

Vue.config.productionTip = false;
Vue.use(Datatable);
Vue.use(BootstrapVue);
Vue.use(msplit);
Vue.use(VueRouter);
Vue.component('tree-view-item', TreeViewItem);
Vue.component('codemirror', codemirror);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/table', component: TableTest },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
