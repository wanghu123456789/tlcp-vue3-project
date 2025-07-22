<template>
  <div class="role-manage-container">
    <div class="filter-container">
      <el-input v-model="query.search" placeholder="搜索角色" clearable style="width: 200px" />
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button type="primary" @click="handleCreate">添加角色</el-button>
    </div>

    <el-table :data="list" border>
      <el-table-column label="ID" prop="id" width="80" align="center" />
      <el-table-column label="角色名称" prop="name" />
      <el-table-column label="角色标识" prop="code" />
      <el-table-column label="描述" prop="description" />
      <el-table-column label="创建时间" prop="createdAt" width="180" />
      <el-table-column label="操作" width="180" align="center">
        <template #default="{ row }">
          <el-button size="mini" @click="handleEdit(row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination
        v-if="total"
        v-model:page="query.page"
        v-model:limit="query.limit"
        :total="total"
        @pagination="getList"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Pagination from '@/components/page/BasePagination.vue'

const query = reactive({
  search: '',
  page: 1,
  limit: 20
})

const list = ref([
  { id: 1, name: '超级管理员', code: 'admin', description: '系统最高权限', createdAt: '2023-01-01 10:00:00' },
  { id: 2, name: '数据分析师', code: 'analyst', description: '负责数据分析', createdAt: '2023-01-15 14:30:00' }
])

const total = ref(list.value.length)

const getList = () => { /* TODO */ }
const handleCreate = () => { /* TODO */ }
const handleEdit = () => { /* TODO */ }
const handleDelete = () => { /* TODO */ }
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
}
.filter-container > * {
  margin-right: 10px;
}
</style>