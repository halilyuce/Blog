<template>
  <div class="container">
    <div>
      <ul>
        <li v-for="post in posts">
          <span>{{ post.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.loadPosts()
  },
  methods: {
    async loadPosts() {
      const response = await this.$axios.$get('/api/posts')
      this.posts = response.data.posts
    }
  }
}
</script>
