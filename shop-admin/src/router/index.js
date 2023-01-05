import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/page/index.vue"
import About from "~/page/about.vue"
import NotFound from "~/page/404.vue"
const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router