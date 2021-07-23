/*
 * @Author: your name
 * @Date: 2021-06-15 15:48:17
 * @LastEditTime: 2021-07-23 17:42:23
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
    component: Home,
    meta: {
        title: "首页"
    }
}, {
    name: "About",
    path: "/about",
    component: About,
    meta: {
        title: "关于我"
    }
}, {
    name: "Blog",
    path: "/blog",
    component: Blog,
    meta: {
        title: "文章"
    }
}, {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component: Blog,
    meta: {
        title: "文章"
    }
}, {
    name: "BlogDetail",
    path: "/blog/:id",
    component: BlogDetail,
    meta: {
        title: "文章详情"
    }
}, {
    name: "Project",
    path: "/project",
    component: Project,
    meta: {
        title: "项目&效果"
    }
}, {
    name: "Message",
    path: "/message",
    component: Message,
    meta: {
        title: "留言板",
    }
}, ]