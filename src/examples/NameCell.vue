<script setup lang="ts">
defineProps<{
  data: string
}>()
</script>

<template>
  <div class="cell">
    {{ data }}
  </div>
</template>

<style scoped>
.cell {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-weight: 700;
  color: red;
}
</style>
