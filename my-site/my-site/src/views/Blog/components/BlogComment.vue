<!--
 * @Author: your name
 * @Date: 2021-07-17 16:18:41
 * @LastEditTime: 2021-07-17 18:09:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE_learing_notes\my-site\my-site\src\views\Blog\components\BlogComment.vue
-->
<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`${data.total}`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 10, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style>
.blog-comment-container {
  margin: 30px 0;
}
</style>