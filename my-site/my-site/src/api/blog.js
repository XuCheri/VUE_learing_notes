/*
 * @Author: your name
 * @Date: 2021-07-14 15:49:15
 * @LastEditTime: 2021-07-16 08:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\api\blog.js
 */
import request from "./request";

/**
 * @description:获取博客列表的数据 
 * @param {*}
 * @return {*}
 */
export async function getBlogs(page = 1, limit = 10, categories = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categories
        }
    })
}


/**
 * @description: 获取博客分类
 * @param {*} page
 * @param {*} limit
 * @param {*} categories
 * @return {*}
 */
export async function getBlogTypes() {
    return await request.get("/api/blogtype")
}


/**
 * @description: 获取单个文章内容
 * @param {*} id
 * @return {*}
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}


/**
 * @description: 提交评论
 * @param {*} commentInfo
 * @return {*}
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo);
}


/**
 * @description: 获取评论
 * @param {*} commentInfo
 * @return {*}
 */
export async function getComments(blogId, page = 1, limit = 10) {
    return await request.get(`/api/comment`, {
        params: {
            blogId,
            page,
            limit,
        }
    });
}