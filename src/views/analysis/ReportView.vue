<template>
  <div class="report-view-container">
    <div class="filter-container">
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" />
      <el-button type="primary" @click="getReport">生成报表</el-button>
      <el-button type="primary" @click="exportReport">导出报表</el-button>
    </div>

    <el-card class="report-card">
      <div class="report-header">
        <h2>国密TLCP协议数据采集分析报表</h2>
        <p>时间范围：{{ dateRange ? dateRange.join(' 至 ') : '全部' }}</p>
      </div>

      <el-row :gutter="20">
        <el-col :span="8" v-for="s in stats" :key="s.title">
          <div class="report-stat">
            <div class="stat-title">{{ s.title }}</div>
            <div class="stat-value">{{ s.value }}</div>
          </div>
        </el-col>
      </el-row>

      <el-divider />

      <div class="table-section">
        <h3>详细数据</h3>
        <el-table :data="tableData" border>
          <el-table-column prop="time" label="时间" width="180" />
          <el-table-column prop="device" label="设备名称" width="150" />
          <el-table-column prop="protocol" label="协议类型" width="100" />
          <el-table-column prop="total" label="总数量" width="100" />
          <el-table-column prop="normal" label="正常数量" width="100" />
          <el-table-column prop="abnormal" label="异常数量" width="100" />
          <el-table-column prop="abnormalRate" label="异常率" width="100" />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const dateRange = ref([])
const stats = reactive([
  { title: '采集任务总数', value: 12 },
  { title: '总协议数量', value: '2,458,732' },
  { title: '异常协议数量', value: '12,345' }
])

const tableData = ref([
  { time: '2023-07-15', device: '采集设备-01', protocol: 'TLCP', total: '1,245,678', normal: '1,240,123', abnormal: '5,555', abnormalRate: '0.45%' },
  { time: '2023-07-15', device: '采集设备-02', protocol: 'TLCP', total: '987,654', normal: '985,432', abnormal: '2,222', abnormalRate: '0.22%' }
])

const getReport = () => { /* TODO */ }
const exportReport = () => { /* TODO */ }
</script>

<style scoped>
.report-view-container {
  padding: 20px;
}
.report-card {
  padding: 20px;
}
.report-stat {
  text-align: center;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
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
.table-section h3 {
  margin-bottom: 10px;
}
</style>