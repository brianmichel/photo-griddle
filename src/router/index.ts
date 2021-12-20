import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/d/:photoKey",
        name: "detail",
        component: Detail,
        props: true,
        meta: {
          showModal: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
