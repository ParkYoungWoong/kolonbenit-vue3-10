<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    toggleMenu() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<template>
  <div class="menu">
    <div>
      <slot
        name="activator"
        :hello="{ onclick: toggleMenu }"></slot>
    </div>
    <div v-if="isShow">
      <slot>
        아무것도 안 들어왔어요!
      </slot>
    </div>
  </div>
</template>
