import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import DetailView from "@/components/DetailView.vue";
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
        component: DetailView,
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
