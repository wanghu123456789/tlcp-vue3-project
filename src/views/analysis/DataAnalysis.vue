<template>
  <div class="data-analysis-container">
    <div class="filter-container">
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" />
      <el-select v-model="query.protocol" placeholder="协议类型" clearable style="width: 120px">
        <el-option label="TLCP" value="tlcp" />
        <el-option label="HTTP" value="http" />
      </el-select>
      <el-button type="primary" @click="getData">分析</el-button>
    </div>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="12">
        <el-card class="chart-card">
          <template #header>协议流量趋势</template>
          <ProtocolChart />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="chart-card">
          <template #header>协议类型分布</template>
          <div class="pie-chart"></div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="24">
        <el-card>
          <el-table :data="tableData" border>
            <el-table-column prop="time" label="时间" width="180" />
            <el-table-column prop="protocol" label="协议" width="100" />
            <el-table-column prop="source" label="源地址" />
            <el-table-column prop="destination" label="目的地址" />
            <el-table-column prop="length" label="长度" width="100" />
            <el-table-column label="状态" width="100">
              <template #default="{ row }">
                <el-tag :type="row.status === '正常' ? 'success' : 'danger'">
                  {{ row.status }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ProtocolChart from '@/components/charts/ProtocolChart.vue'

const dateRange = ref([])
const query = reactive({ protocol: '' })

const tableData = ref([
  { time: '2023-07-15 10:23:45', protocol: 'TLCP', source: '192.168.1.100', destination: '192.168.1.101', length: 1024, status: '正常' }
])

const getData = () => { /* TODO */ }
</script>

<style scoped>
.filter-container { margin-bottom: 20px; }
.mt-20 { margin-top: 20px; }
.chart-card { height: 400px; }
.chart-wrapper { height: 350px; }
</style>