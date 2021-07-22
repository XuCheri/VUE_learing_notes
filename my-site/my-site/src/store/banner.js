/*
 * @Author: your name
 * @Date: 2021-07-22 21:34:31
 * @LastEditTime: 2021-07-22 21:56:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\store\banner.js
 */
import {
    getBanners
} from "@/api/banner";

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
        }
    },
    actions: {
        async fetchBanner(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getBanners();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }
}