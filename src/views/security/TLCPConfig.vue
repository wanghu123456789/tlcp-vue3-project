<template>
  <div class="tlcp-config-container">
    <el-card>
      <template #header>
        <span>TLCP协议配置</span>
      </template>
      <el-form :model="form" label-width="200px">
        <el-form-item label="启用TLCP协议">
          <el-switch v-model="form.enabled" />
        </el-form-item>
        <el-form-item label="协议版本">
          <el-input v-model="form.version" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="加密套件">
          <el-checkbox-group v-model="form.ciphers">
            <el-checkbox label="ECC_SM4_SM3" />
            <el-checkbox label="ECC_SM4_CBC_SM3" />
            <el-checkbox label="ECDHE_SM4_SM3" />
            <el-checkbox label="ECDHE_SM4_CBC_SM3" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="双向认证">
          <el-switch v-model="form.mutualAuth" />
        </el-form-item>
        <el-form-item label="证书校验">
          <el-switch v-model="form.certVerify" />
        </el-form-item>
        <el-form-item label="会话超时时间(秒)">
          <el-input-number v-model="form.sessionTimeout" :min="60" :max="3600" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveConfig">保存配置</el-button>
          <el-button @click="resetConfig">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  enabled: true,
  version: '1.1',
  ciphers: ['ECC_SM4_SM3', 'ECDHE_SM4_SM3'],
  mutualAuth: true,
  certVerify: true,
  sessionTimeout: 300
})

const saveConfig = () => { /* TODO */ }
const resetConfig = () => {
  Object.assign(form, {
    enabled: true,
    version: '1.1',
    ciphers: ['ECC_SM4_SM3', 'ECDHE_SM4_SM3'],
    mutualAuth: true,
    certVerify: true,
    sessionTimeout: 300
  })
}
</script>

<style scoped>
.tlcp-config-container {
  padding: 20px;
}
</style>