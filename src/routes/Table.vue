<script>
export default {
  data() {
    return {
      movie: {}
    }
  },
  watch: {
    // this.$route // 페이지 정보가 수정되면 실행되는 함수!
    $route() {
      // this.$route.params.hello
    }
  },
  created() {
    this.getMovie()
  },
  methods: {
    async getMovie() {
      const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${this.$route.params.hello}`)
      const json = await res.json()
      console.log(json)
      this.movie = json
    }
  }
}  
</script>

<template>
  Table!
  <img
    :src="movie.Poster"
    alt="" />
  <h1>{{ movie.Title }}</h1>
</template>
