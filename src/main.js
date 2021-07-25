import Vue from "vue";
import router from "./router";

import BootstrapVue from "bootstrap-vue";
import axios from "axios";

import App from "./App";

import Default from "./Layout/Wrappers/baseLayout.vue";
import Pages from "./Layout/Wrappers/pagesLayout.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.prototype.$http = axios.create({
    baseURL: `http://66.29.135.86:8055`
});
Vue.prototype.$http.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status >= 403) {
            localStorage.removeItem("token");
            router.replace("/");
        }
    }
);
Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);

new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
});
