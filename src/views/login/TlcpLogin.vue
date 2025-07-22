<template>
  <div class="login-page">
    <!-- 背景元素 -->
    <div class="bg-texture"></div>
    <div class="bg-gradient"></div>

    <!-- 登录卡片 -->
    <div class="login-card">
      <!-- 卡片标题区 -->
      <div class="card-header">
        <div class="logo-container">
          <div class="logo">
            <span class="logo-text">TLCP</span>
          </div>
        </div>
        <h1 class="title">国密TLCP协议数据采集分析系统</h1>
        <p class="subtitle">政务信息安全管理平台</p>
      </div>

      <!-- 登录表单 -->
      <el-form ref="loginForm" :model="form" :rules="rules" class="login-form">
        <el-form-item prop="username" class="full-width-item">
          <div class="input-group">
            <el-input
                v-model="form.username"
                placeholder="请输入用户名"
                size="large"
                :prefix-icon="User"
                class="custom-input"
            />
          </div>
        </el-form-item>

        <el-form-item prop="password" class="full-width-item">
          <div class="input-group">
            <el-input
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                size="large"
                :prefix-icon="Lock"
                show-password
                class="custom-input"
            />
          </div>
        </el-form-item>

        <el-form-item class="full-width-item form-options">
          <el-checkbox v-model="form.remember" class="remember-checkbox">
            记住登录状态
          </el-checkbox>
          <el-link type="primary" class="forgot-link">忘记密码</el-link>
        </el-form-item>

        <el-form-item class="full-width-item">
          <el-button
              type="primary"
              class="login-btn"
              :loading="loading"
              @click="handleLogin"
          >
            安全登录
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 底部信息 -->
      <div class="card-footer">
        <p class="copyright">© 2025 政务信息安全中心 版权所有</p>
        <p class="security-level">遵循国家信息安全等级保护标准</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
//import { ElMessage } from 'element-plus'
//import axios from 'axios'
// 表单数据
const form = reactive({
  username: '',
  password: '',
  remember: false
})

// 表单规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, message: '用户名至少3个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少6个字符', trigger: 'blur' }
  ]
}

// 状态与路由
const loading = ref(false)
const router = useRouter()
const loginForm = ref(null)


const handleLogin = async () => {
       // 使用命名路由跳转，确保路径正确
     // router.push({ name: 'Dashboard' })
     // 模拟登录成功
  const token = 'mock-token'
  localStorage.setItem('tlcp-token', token) // ✅ 关键！

  // 再跳转
  router.push('/views/dashboard')

}
// 登录处理
// const handleLogin = async () => {
//   try {
//     await loginForm.value.validate()
//     loading.value = true
//     console.log(router.getRoutes())
  
//     // 实际登录请求/api/login
//     const response = await axios.post('/api/login', {
//       username: form.username,
//       password: form.password
//     })
   
    
   
//     if (response.data.success) {
//       // 存储用户数据
//       const userData = {
//         username: form.username,
//         token: response.data.token
//       }
          
//       // 根据"记住我"选择存储方式
//       if (form.remember) {
//         localStorage.setItem('user', JSON.stringify(userData))
//       } else {
//         sessionStorage.setItem('user', JSON.stringify(userData))
//       }
      
//      router.push('/views/dashboard')
//     } else {
//       ElMessage.error(response.data.message || '登录失败，请检查用户名和密码')
//     }
//   } catch (err) { // 使用 err 而不是 error
//     console.error('登录出错:', err)
    
//     // 获取错误信息
//     const errorMsg = err?.response?.data?.message || 
//                      err?.message || 
//                      '登录过程中出现未知错误'
    
//     ElMessage.error(errorMsg)
//   } finally {
//     loading.value = false
//   }
// }
</script>

<style lang="scss" scoped>
// 政务主题色
$primary-red: #b71c1c;        // 深暗红（主色）
$primary-red-dark: #951515;   // 更深的红色
$primary-red-light: #d32f2f;  // 亮红
$gold: #c9b037;               // 正金色
$bg-start: #e6edf5;           // 渐变起始色（浅蓝灰）
$bg-mid: #f2f7fc;             // 渐变中间色
$bg-end: #ffffff;             // 渐变结束色（白色）
$texture-color: rgba(183, 28, 28, 0.02); // 纹理色

// 页面容器
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  .bg-texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b71c1c' fill-opacity='0.02'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
  }

  .bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            180deg,
            $bg-start 0%,
            $bg-mid 60%,
            $bg-end 100%
    );
    z-index: 2;
  }
}

// 登录卡片
.login-card {
  width: 100%;
  max-width: 450px;
  background: white;
  border-radius: 8px;
  padding: 50px 40px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  position: relative;
  z-index: 10;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
}

// 卡片头部
.card-header {
  text-align: center;
  margin-bottom: 40px;

  .logo-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto 30px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: rgba(183, 28, 28, 0.1);
      border-radius: 50%;
      z-index: -1;
    }
  }

  .logo {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background: linear-gradient(135deg, $primary-red, $primary-red-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 36px;
    font-weight: bold;
    box-shadow: 0 3px 10px rgba(183, 28, 28, 0.2);
    border: 2px solid rgba(255,255,255,0.3);
    position: relative;

    .logo-text {
      position: relative;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: 10%;
      right: 10%;
      width: 15px;
      height: 15px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
    }
  }

  .title {
    font-size: 22px;
    font-weight: 600;
    color: $primary-red;
    margin: 0 0 10px;
    letter-spacing: 0.8px;
  }

  .subtitle {
    color: #666;
    font-size: 14px;
    margin: 0;
  }
}

// 表单样式
.login-form {
  width: 100%;
  // 关键：设置表单容器宽度为100%，确保内部元素可撑满
  padding: 0;
  margin: 0 auto;
  max-width: none;
}

// 确保表单项宽度与登录按钮一致
.full-width-item {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 0 !important;
}

.input-group {
  position: relative;
  width: 100%; // 输入组宽度100%

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, $primary-red, $gold);
    transition: width 0.3s ease;
  }

  &:focus-within::after {
    width: 100%;
  }
}

// 输入框关键调整：宽度100%，与登录按钮一致
.custom-input {
  width: 100% !important; // 强制输入框宽度100%
  border: 1px solid #ddd;
  border-radius: 6px;
  color: #333;
  height: 50px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #bbb;
  }

  &:focus-within {
    border-color: $primary-red;
    box-shadow: 0 0 0 2px rgba(183, 28, 28, 0.1);
  }

  :deep( .el-input__wrapper) {
    width: 100% !important; // 穿透设置内部容器宽度
    padding: 0 16px !important;
    box-shadow: none !important;
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px !important; // 缩减选项区与按钮的间距
}

.remember-checkbox {
  color: #666;
  font-size: 14px;

  :deep( .el-checkbox__input.is-checked .el-checkbox__inner) {
    background-color: $primary-red;
    border-color: $primary-red;
  }
}

.forgot-link {
  color: $primary-red;
  font-size: 14px;

  &:hover {
    color: $primary-red-dark;
    text-decoration: underline;
  }
}

// 登录按钮保持100%宽度，与输入框匹配
.login-btn {
  width: 100% !important;
  height: 50px;
  background: linear-gradient(90deg, $primary-red, $primary-red-light);
  border-color: $primary-red;
  color: white;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(90deg, $primary-red-light, $primary-red);
    border-color: $primary-red;
    box-shadow: 0 3px 10px rgba(183, 28, 28, 0.2);
    color: white;
  }
}

// 卡片底部
.card-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px dashed #eee;

  .copyright {
    color: #999;
    font-size: 12px;
    text-align: center;
    margin: 0 0 5px;
  }

  .security-level {
    color: $primary-red;
    font-size: 12px;
    text-align: center;
    margin: 0;
    font-weight: 500;
  }
}

// 响应式调整
@media (max-width: 576px) {
  .login-card {
    padding: 30px 25px;
  }

  .card-header {
    margin-bottom: 30px;

    .logo-container {
      width: 90px;
      height: 90px;
      margin-bottom: 20px;
    }

    .logo {
      width: 70px;
      height: 70px;
      font-size: 30px;
    }

    .title {
      font-size: 20px;
    }
  }

  .custom-input,
  .login-btn {
    height: 48px;
  }
}
</style>