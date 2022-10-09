<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="table">
    <div class="row head">
      <div
        v-for="col in columns"
        :key="col.field"
        :style="{ width: `${col.width || 130}px` }"
        class="column">
        {{ col.title }}
      </div>
    </div>
    <div 
      v-for="row in data"
      :key="row.id"
      class="row">
      <div 
        v-for="col in columns"
        :key="col.field"
        :style="{ width: `${col.width || 130}px` }"
        class="column">
        <template v-if="col.component">
          <Component
            :is="col.component"
            :data="row[col.field]" />
        </template>
        <template v-else>
          {{ row[col.field] }}
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table {
  width: 500px;
  height: 160px;
  overflow: auto; 
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  position: relative;
  .row {
    display: flex;
    .column {
      flex-shrink: 0;
      padding: 10px;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      &:last-child {
        border-right: 1px solid #ccc;
      }
    }
  }
  .row.head {
    position: sticky;
    top: 0;
    .column {
      background-color: orange;
    }
  }
}
</style>
