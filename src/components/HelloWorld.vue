<script>
export default {
  props: {
    message: {
      type: [String, Array],
      default: '?',
      required: true
    }
  },
  emits: ['hello'],
  data() {
    return {
      count: 123
    }
  }
}
</script>

<template>
  <h1 @click="$emit('hello', count)">
    {{ message }}
  </h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
