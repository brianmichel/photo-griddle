import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
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
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
