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
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.loadPosts()
  },
  methods: {
    async loadPosts() {
      const response = await axios.get('/api/posts')
      this.posts = response.data
    }
  }
}
</script>
