<script>
export default {
  data() {
    return {
      movies: []
    }
  },
  created() {
    this.getMovie()
  },
  methods: {
    async getMovie() {
      const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
      const json = await res.json()
      console.log(json)
      this.movies = json.Search
    }
  }
}
</script>

<template>
  Home!
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <RouterLink :to="`/table/${movie.imdbID}`">
        {{ movie.Title }}
      </RouterLink>
    </li>
  </ul>
</template>
