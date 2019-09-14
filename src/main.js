import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "https://vuehttp-cc0f9.firebaseio.com/";
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method == "POST") {
    req.method = "PUT";
  }
  next(res => {
    res.json = () => ({ messages: res.body });
  });
});
new Vue({
  el: "#app",
  render: h => h(App)
});
