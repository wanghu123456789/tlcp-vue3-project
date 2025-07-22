<template>
  <div class="realtime-monitor-container">
    <el-row :gutter="20">
      <el-col :span="8" v-for="s in stats" :key="s.title">
        <el-card class="stat-card">
          <div class="stat-title">{{ s.title }}</div>
          <div class="stat-value">{{ s.value }}</div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="12">
        <el-card>
          <template #header>
            <span>设备状态</span>
          </template>
          <el-table :data="deviceStatus">
            <el-table-column prop="name" label="设备名称" />
            <el-table-column prop="ip" label="设备IP" />
            <el-table-column label="状态">
              <template #default="{ row }">
                <el-tag :type="row.status === '在线' ? 'success' : row.status === '异常' ? 'warning' : 'danger'">
                  {{ row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="CPU使用率">
              <template #default="{ row }">
                <el-progress :percentage="row.cpu" :color="cpuColor(row.cpu)" />
              </template>
            </el-table-column>
            <el-table-column label="内存使用率">
              <template #default="{ row }">
                <el-progress :percentage="row.memory" :color="memoryColor(row.memory)" />
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <span>实时流量</span>
          </template>
          <div class="chart-wrapper"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const stats = reactive([
  { title: '在线设备', value: 18 },
  { title: '运行中任务', value: 12 },
  { title: '当前告警', value: 3 }
])

const deviceStatus = reactive([
  { name: '采集设备-01', ip: '192.168.1.101', status: '在线', cpu: 45, memory: 60 },
  { name: '采集设备-02', ip: '192.168.1.102', status: '在线', cpu: 30, memory: 45 },
  { name: '采集设备-03', ip: '192.168.1.103', status: '异常', cpu: 95, memory: 90 }
])

const cpuColor = (p) => (p < 50 ? '#67C23A' : p < 80 ? '#E6A23C' : '#F56C6C')
const memoryColor = (p) => (p < 60 ? '#67C23A' : p < 80 ? '#E6A23C' : '#F56C6C')
</script>

<style scoped>
.realtime-monitor-container {
  padding: 20px;
}
.stat-card {
  text-align: center;
}
.stat-title {
  font-size: 14px;
  color: #909399;
}
.stat-value {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}
.mt-20 {
  margin-top: 20px;
}
.chart-wrapper {
  height: 300px;
}
</style>