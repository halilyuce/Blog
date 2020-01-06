import API from './API'
export default {
  getPosts() {
    return API().get('posts')
  }
}
