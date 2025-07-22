<template>
  <div class="user-list-container">
    <div class="filter-container">
      <el-input v-model="query.search" placeholder="搜索用户" clearable style="width: 200px" />
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button type="primary" @click="handleCreate">添加用户</el-button>
    </div>

    <el-table :data="list" border>
      <el-table-column label="ID" prop="id" width="80" />
      <el-table-column label="用户名" prop="username" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="角色" prop="role" />
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === '启用' ? 'success' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
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

const query = reactive({ search: '', page: 1, limit: 20 })

const list = ref([
  { id: 1, username: 'admin', name: '管理员', role: '超级管理员', status: '启用', createdAt: '2023-01-01 10:00:00' },
  { id: 2, username: 'zhangsan', name: '张三', role: '数据分析师', status: '启用', createdAt: '2023-01-15 14:30:00' }
])

const total = ref(list.value.length)

const getList = () => { /* TODO */ }
const handleCreate = () => { /* TODO */ }
const handleEdit = () => { /* TODO */ }
const handleDelete = () => { /* TODO */ }
</script>

<style scoped>
.filter-container { margin-bottom: 20px; }
.filter-container > * { margin-right: 10px; }
</style>