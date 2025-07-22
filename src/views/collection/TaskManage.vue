<template>
  <div class="task-manage-container">
    <div class="filter-container">
      <el-input v-model="query.taskName" placeholder="任务名称" clearable style="width: 200px" />
      <el-select v-model="query.status" placeholder="状态" clearable style="width: 120px">
        <el-option label="运行中" value="running" />
        <el-option label="已停止" value="stopped" />
      </el-select>
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button type="primary" @click="handleCreate">新建任务</el-button>
    </div>

    <el-table :data="list" border>
      <el-table-column label="ID" prop="id" width="80" />
      <el-table-column label="任务名称" prop="name" />
      <el-table-column label="协议类型" prop="protocol" />
      <el-table-column label="采集设备" prop="device" />
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === '运行中' ? 'success' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createdAt" width="180" />
      <el-table-column label="操作" width="200" align="center">
        <template #default="{ row }">
          <el-button size="mini" @click="handleEdit(row)">编辑</el-button>
          <el-button
              size="mini"
              :type="row.status === '运行中' ? 'danger' : 'success'"
              @click="toggleStatus(row)"
          >
            {{ row.status === '运行中' ? '停止' : '启动' }}
          </el-button>
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
  taskName: '',
  status: '',
  page: 1,
  limit: 20
})

const list = ref([
  { id: 1, name: 'TLCP采集任务1', protocol: 'TLCP', device: '采集设备-01', status: '运行中', createdAt: '2023-07-01 10:00:00' },
  { id: 2, name: 'TLCP采集任务2', protocol: 'TLCP', device: '采集设备-02', status: '已停止', createdAt: '2023-07-05 14:30:00' }
])

const total = ref(list.value.length)

const getList = () => { /* TODO */ }
const handleCreate = () => { /* TODO */ }
const handleEdit = () => { /* TODO */ }
const toggleStatus = (row) => {
  row.status = row.status === '运行中' ? '已停止' : '运行中'
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
}
.filter-container > * {
  margin-right: 10px;
}
</style>