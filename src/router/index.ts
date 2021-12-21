import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/d/:filename",
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
