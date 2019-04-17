import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router.js";

import VueQuillEditor from "vue-quill-editor"
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.use(VueQuillEditor);


// 引用API文件
import api from "./api/http.js";
// 将API方法绑定到全局
Vue.prototype.$api = api;

Vue.config.productionTip = false;


new Vue({
    store,
    router,
  render: h => h(App)
}).$mount("#app");

