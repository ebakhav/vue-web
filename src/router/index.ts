import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home/home.vue";
import Batman from "../page/batman/batman.vue";
import Barbie from "../page/barbie/barbie.vue";
import Responce from "../page/response/responce.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
        path: '/',

        component: Home 
    },
    {
        path: '/batman',
        name: 'batman',
        component: Batman
    },
    {
        path: '/barbie',
        name: 'barbie',
        component: Barbie
    },
    {
        path: '/indecision',
        name: 'indecision',
        component: Responce
    },
    {
        path: '/:pathMatch( *)*',
        redirect: "/"
    }
  ]
});