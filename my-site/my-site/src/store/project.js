/*
 * @Author: your name
 * @Date: 2021-07-23 20:31:11
 * @LastEditTime: 2021-07-23 20:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\store\project.js
 */
import {
    getProjects
} from "@/api/project";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: [],
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchProject(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getProjects();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        },
    },

};