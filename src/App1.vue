<script>
import TextField from '~/components/TextField.vue'
import TheMenu from '~/components/TheMenu.vue'

export default {
  components: {
    
  },
  data() {
    return {
      loading: true,
      bg: ''
    }
  },
  methods: {
    async getImage() {
      const url = 'https://www.gstatic.com/webp/gallery/4.jpg'
      await this.$loadImage(url)
      this.loading = false
      this.bg = url
    }
  }
}
</script>

<template>
  <button @click="getImage">
    이미지 가져오기!
  </button>
  <div
    :style="{
      backgroundImage: `url(${bg})`
    }"
    class="image">
    <TheLoader
      :loading="loading"
      class="loader" />
  </div>
</template>

<style scoped>
.image {
  width: 300px;
  height: 200px;
  border: 4px solid;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
