<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  data: string
}>()

const phone = computed(() => (props.data as string).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'))
</script>

<template>
  <div class="cell">
    {{ phone }}
  </div>
</template>
