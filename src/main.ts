import { createApp } from "vue";
import App from "./App.vue";
import Lv from "./components/Lv.vue";
import Lv1 from "./components/Lv1.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Lv },
    { path: "/xxx", component: Lv1 },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
