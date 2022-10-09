<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  columns: {
    field: string
    title: string
    width?: number
    component?: Component
  }[],
  data: {
    id: string
    [key: string]: unknown
  }[]
}>()
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
        :class="row.id"
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
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: auto;
  position: relative;
  .row {
    display: flex;
    &.head {
      position: sticky;
      top: 0;
      z-index: 1;
      .column {
        background-color: white;
        border-bottom: 1px solid #ccc;
        margin-bottom: -1px;
      }
    }
    .column {
      flex-shrink: 0;
      padding: 10px;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
    }
  }
}
</style>
