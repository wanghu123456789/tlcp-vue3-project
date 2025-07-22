<template>
  <div class="alert-manage-container">
    <div class="filter-container">
      <el-select v-model="query.level" placeholder="告警级别" clearable style="width: 120px">
        <el-option label="紧急" value="emergency" />
        <el-option label="严重" value="critical" />
        <el-option label="警告" value="warning" />
        <el-option label="一般" value="info" />
      </el-select>
      <el-select v-model="query.status" placeholder="处理状态" clearable style="width: 120px">
        <el-option label="未处理" value="unprocessed" />
        <el-option label="处理中" value="processing" />
        <el-option label="已处理" value="processed" />
      </el-select>
      <el-date-picker v-model="query.dateRange" type="daterange" range-separator="至" />
      <el-button type="primary" @click="getList">查询</el-button>
    </div>

    <el-table :data="list" border>
      <el-table-column label="ID" prop="id" width="80" />
      <el-table-column label="告警时间" prop="time" width="180" />
      <el-table-column label="设备名称" prop="device" />
      <el-table-column label="告警类型" prop="type" />
      <el-table-column label="告警级别" width="100">
        <template #default="{ row }">
          <el-tag :type="levelMap[row.level]">
            {{ row.level }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="处理状态" width="100">
        <template #default="{ row }">
          <el-tag :type="statusMap[row.status]">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="center">
        <template #default="{ row }">
          <el-button v-if="row.status !== '已处理'" type="text" @click="handleProcess(row)">处理</el-button>
          <el-button type="text" @click="handleDetail(row)">详情</el-button>
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

const levelMap = {
  紧急: 'danger',
  严重: 'danger',
  警告: 'warning',
  一般: 'info'
}

const statusMap = {
  未处理: 'danger',
  处理中: 'warning',
  已处理: 'success'
}

const query = reactive({
  level: '',
  status: '',
  dateRange: '',
  page: 1,
  limit: 20
})

const list = ref([
  { id: 1, time: '2023-07-15 10:23:45', device: '采集设备-01', type: '协议解析错误', level: '紧急', status: '未处理' },
  { id: 2, time: '2023-07-15 09:12:34', device: '采集设备-03', type: '数据量异常', level: '严重', status: '处理中' },
  { id: 3, time: '2023-07-14 15:45:22', device: '采集设备-05', type: '连接超时', level: '警告', status: '未处理' },
  { id: 4, time: '2023-07-14 08:30:15', device: '采集设备-02', type: 'CPU过高', level: '一般', status: '已处理' }
])

const total = ref(list.value.length)

const getList = () => { /* TODO */ }
const handleProcess = () => { /* TODO */ }
const handleDetail = () => { /* TODO */ }
</script>

<style scoped>
.alert-manage-container {
  padding: 20px;
}
.filter-container {
  margin-bottom: 20px;
}
.filter-container > * {
  margin-right: 10px;
}
</style>