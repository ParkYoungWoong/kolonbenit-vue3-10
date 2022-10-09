<script>
import data from '~/data/data'
import SimpleTable from '~/components/SimpleTable.vue'
import SimpleTableWrap from '~/examples/SimpleTableWrap.vue'
import NameCell from '~/components/NameCell.vue'
import PhoneCell from '~/components/PhoneCell.vue'

export default {
  components: {
    SimpleTable,
    SimpleTableWrap
  },
  data() {
    return {
      columns: [
        { field: 'name', title: '이름!', width: 100, component: NameCell },
        { field: 'age', title: '나이!', width: 40 },
        { field: 'email', title: '이메일?' },
        { field: 'address', title: '주소' },
        { field: 'phone', title: '전화번호', component: PhoneCell }
      ],
      data
    }
  },
  methods: {
    byName() {
      this.data.sort((a, b) => a.name < b.name 
        ? -1
        : a.name > b.name 
          ? 1 
          : 0
      )
    },
    byAge() {
      this.data.sort((a, b) => a.age - b.age)
    }
  }
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

  <div class="space"></div>

  <SimpleTableWrap />
</template>

<style scoped>
.space {
  padding: 50px 0;
}
</style>
