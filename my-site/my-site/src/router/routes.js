/*
 * @Author: your name
 * @Date: 2021-06-15 15:48:17
 * @LastEditTime: 2021-07-16 18:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\router\routes.js
 */
import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Project from "@/views/Project"
import Message from "@/views/Message"
import BlogDetail from "@/views/Blog/detail"

export default [{
    name: "Home",
    path: "/",
    component: Home
}, {
    name: "About",
    path: "/about",
    component: About
}, {
    name: "Blog",
    path: "/blog",
    component: Blog
}, {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: Blog
}, {
    name: "BlogDetail",
    path: "/blog/:id",
    component: BlogDetail
}, {
    name: "Project",
    path: "/project",
    component: Project
}, {
    name: "Message",
    path: "/message",
    component: Message
}, ]