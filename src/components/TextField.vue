<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    textarea: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    v-if="!textarea"
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" />
  <textarea
    v-else
    v-bind="$attrs"></textarea>
  <button>
    TextField
  </button>
</template>

<style scoped>
  input {
    border: 2px solid;
  }
  input:focus {
    border: 2px solid orange;
  }
</style>
