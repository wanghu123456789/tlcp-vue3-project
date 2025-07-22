<template>
  <div className="pagination-container">
    <el-pagination
        v-model:currentPage="currentPage"
        :page-size="limit"
        :total="total"
        layout="total, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import {computed,defineProps} from 'vue'


const props = defineProps({
  total: {type: Number, default: 0},
  page: {type: Number, default: 1},
  limit: {type: Number, default: 20}
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:page', 'update:limit', 'pagination'])

const currentPage = computed({
  get: () => props.page,
  set: val => emit('update:page', val)
})

function handleSizeChange(val) {
  emit('update:limit', val)
  emit('pagination')
}

function handleCurrentChange(val) {
  emit('update:page', val)
  emit('pagination')
}
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>