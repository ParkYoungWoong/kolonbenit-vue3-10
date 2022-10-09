<script setup lang="ts">
import { ref } from 'vue'
import _data from './data'
import SimpleTable from './SimpleTable.vue'
import NameCell from './NameCell.vue'
import PhoneCell from './PhoneCell.vue'

const columns = ref([
  { field: 'name', title: '이름', width: 100, component: NameCell },
  { field: 'age', title: '나이', width: 40 },
  { field: 'email', title: '이메일' },
  { field: 'address', title: '주소' },
  { field: 'phone', title: '전화번호', component: PhoneCell }
])
const data = ref(_data)

function byName() {
  data.value.sort((a, b) => a.name < b.name 
    ? -1
    : a.name > b.name 
      ? 1 : 0
  )
}
function byAge() {
  data.value.sort((a, b) => a.age - b.age)
}
</script>

<template>
  <button @click="byName">
    이름순
  </button>
  <button @click="byAge">
    나이순
  </button>
  <SimpleTable
    :columns="columns"
    :data="data" />
</template>
