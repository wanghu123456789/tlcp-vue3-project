<template>
  <div class="device-config-container">
    <div class="filter-container">
      <el-input v-model="query.deviceName" placeholder="设备名称" clearable style="width: 200px" />
      <el-select v-model="query.status" placeholder="状态" clearable style="width: 120px">
        <el-option label="在线" value="online" />
        <el-option label="离线" value="offline" />
      </el-select>
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button type="primary" @click="handleCreate">添加设备</el-button>
    </div>

    <el-table :data="list" border>
      <el-table-column label="ID" prop="id" width="80" />
      <el-table-column label="设备名称" prop="name" />
      <el-table-column label="设备IP" prop="ip" />
      <el-table-column label="设备类型" prop="type" />
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === '在线' ? 'success' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createdAt" width="180" />
      <el-table-column label="操作" width="200" align="center">
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
  deviceName: '',
  status: '',
  page: 1,
  limit: 20
})

const list = ref([
  { id: 1, name: '采集设备-01', ip: '192.168.1.101', type: 'TLCP采集器', status: '在线', createdAt: '2023-06-01 10:00:00' },
  { id: 2, name: '采集设备-02', ip: '192.168.1.102', type: 'TLCP采集器', status: '在线', createdAt: '2023-06-05 14:30:00' }
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