import Vue from "vue";
// import components
import App from "./App";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Search from "./components/offenders/Search";
import Add from "./components/offenders/Add";
import Update from "./components/offenders/Update";
import Footer from "./components/footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faUser,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faUserSecret);
Vue.component("offender-banner", Banner);
Vue.component("offender-header", Header);
Vue.component("offender-footer", Footer);
Vue.component("font-awesome", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Search },
    {
      path: "/add",
      component: Add
    },
    {
      path: "/update",
      component: Update
    }
  ]
});

new Vue({
  router,
  template: `<div id='app'>
  <offender-header/>
  <offender-banner/>
    <router-view></router-view>
<offender-footer/>
  </div>`
}).$mount("#app");
