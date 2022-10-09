<script>
export default {
  props: {
    data: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      name: ''
    }
  },
  methods: {
    onEditMode() {
      this.editMode = true
      this.name = this.data
    },
    submit() {
      console.log(this.name + '을 서버로 전송!')
    }
  }
}
</script>

<template>
  <div
    class="cell"
    @dblclick="onEditMode">
    <template v-if="!editMode">
      {{ data }}
    </template>
    <template v-else>
      <input
        v-model="name"
        @keydown.enter="submit" />
    </template>
  </div>
</template>

<style scoped>
.cell {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-weight: 700;
  color: green;
}
</style>
