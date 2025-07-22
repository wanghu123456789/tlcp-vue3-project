<template>
  <div class="algorithm-manage-container">
    <el-card>
      <template #header>
        <span>国密算法配置</span>
      </template>
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="name" label="算法名称" />
        <el-table-column prop="type" label="算法类型" />
        <el-table-column label="状态">
          <template #default="{ row }">
            <el-switch v-model="row.status" :active-value="1" :inactive-value="0" />
          </template>
        </el-table-column>
        <el-table-column label="优先级">
          <template #default="{ row }">
            <el-input-number v-model="row.priority" :min="1" :max="10" size="small" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template #default="{ row }">
            <el-button type="text" @click="saveAlgorithm(row)">保存</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const list = reactive([
  { id: 1, name: 'SM2', type: '非对称加密', status: 1, priority: 1 },
  { id: 2, name: 'SM3', type: '杂凑算法', status: 1, priority: 2 },
  { id: 3, name: 'SM4', type: '对称加密', status: 1, priority: 3 },
  { id: 4, name: 'SM9', type: '标识密码算法', status: 0, priority: 4 }
])

const saveAlgorithm = () => { /* TODO */ }
</script>

<style scoped>
.algorithm-manage-container {
  padding: 20px;
}
</style>