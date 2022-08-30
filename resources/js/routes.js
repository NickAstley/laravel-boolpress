import VueRouter from "vue-router";
import Home from "./pages/home";
import Posts from "./pages/posts";

const routes = [
    {path: "/", component:Home, name: "Home"},
    {path: "/posts", component:Posts, name: "Posts"}
]

export default new VueRouter({
    routes
})