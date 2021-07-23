/*
 * @Author: your name
 * @Date: 2021-07-23 19:25:08
 * @LastEditTime: 2021-07-23 19:31:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\store\about.js
 */
import {
    getAbout
} from "@/api/about";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: "",
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
        async fetchAbout(ctx) {
            if (ctx.state.data) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getAbout();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }
}