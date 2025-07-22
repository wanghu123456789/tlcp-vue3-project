<template>
  <div class="dashboard-index-container">
    <el-row :gutter="20">
      <el-col :span="6" v-for="stat in stats" :key="stat.title">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" :style="{ backgroundColor: stat.color }">
              <component :is="stat.icon" style="color:#fff;font-size:30px;" />
            </div>
            <div class="stat-info">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-title">{{ stat.title }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="16">
        <el-card>
          <template #header>协议数据采集趋势</template>
          <ProtocolChart />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>协议类型分布</template>
          <div class="pie-chart"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ProtocolChart from '@/components/charts/ProtocolChart.vue'
import { Monitor, Cpu, Document, Warning } from '@element-plus/icons-vue'

const stats = reactive([
  { title: '采集任务数', value: '24', icon: Monitor, color: '#409EFF' },
  { title: '在线设备数', value: '18', icon: Cpu, color: '#67C23A' },
  { title: '今日协议数', value: '1,248,352', icon: Document, color: '#E6A23C' },
  { title: '未处理告警', value: '3', icon: Warning, color: '#F56C6C' }
])
</script>

<style scoped>
.dashboard-index-container { padding: 20px; }
.stat-card .stat-content { display: flex; align-items: center; }
.stat-icon { width: 60px; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px; }
.stat-value { font-size: 24px; font-weight: bold; }
.stat-title { font-size: 14px; color: #999; }
.mt-20 { margin-top: 20px; }
</style>