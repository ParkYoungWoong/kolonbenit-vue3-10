<script>

</script>

<template>
  <div class="btn">
    <slot
      name="inner"
      hello="123"></slot>
  </div>
  <slot name="outer"></slot>
</template>

<style scoped>
.btn {
  background-color: royalblue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  width: min-content;
  word-break: keep-all;
}
</style>
