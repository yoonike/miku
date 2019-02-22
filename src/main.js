// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axois from "axios";
import QS from "qs";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "vue-awesome-swiper/dist/vue-awesome-swiper";
import Api from "./api";
//axois配置
Vue.prototype.api = Api;

axois.baseURL = Api.baseURL;
axois.headers = { "X-Requested-With": "XMLHttpRequest", charset: "UTF-8" };
Vue.config.productionTip = false;
//公用方法
Vue.prototype.$http = function(obj) {
  let method = obj.method || "post";

  axois[method](obj.url, QS.stringify(obj.data))
    .then(function(res) {
      obj.handle(res);
    })
    .catch(function(error) {
      console.log(error);
    });
};

Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
