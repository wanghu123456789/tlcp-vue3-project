import { createRouter, createWebHistory } from 'vue-router'
//import SvgIcon from '@/components/icons/SvgIcon.vue';
import Login from '@/views/login/TlcpLogin.vue'
import Layout from '@/components/layout/TlcpLayout.vue'
import Dashboard from '@/views/dashboard/TlcpIndex.vue'
import UserList from '@/views/user/UserList.vue'
import RoleManage from '@/views/user/RoleManage.vue'
import TaskManage from '@/views/collection/TaskManage.vue'
import DeviceConfig from '@/views/collection/DeviceConfig.vue'
import DataAnalysis from '@/views/analysis/DataAnalysis.vue'
import ReportView from '@/views/analysis/ReportView.vue'
import TLCPConfig from '@/views/security/TLCPConfig.vue'
import AlgorithmManage from '@/views/security/AlgorithmManage.vue'
import RealtimeMonitor from '@/views/monitor/RealtimeMonitor.vue'
import AlertManage from '@/views/monitor/AlertManage.vue'
import NotFound from '@/views/error/NotFound.vue' // 需要创建404页面组件
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/views',
        component: Layout,

        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    title: '系统概览',
                    icon: 'monitor',
                    iconType: 'svg'
                    }
            },
            {
                path: 'user',
                name: 'User',
                redirect: '/user/list',
                meta: {
                    title: '用户管理',
                    icon: 'list',
                    iconType: 'svg'
                },
                children: [
                    {
                        path: 'list',
                        name: 'UserList',
                        component: UserList,
                        meta: {
                            title: '用户列表',
                            icon: 'form',
                            iconType: 'svg'
                        }
                    },
                    {
                        path: 'role',
                        name: 'RoleManage',
                        component: RoleManage,
                        meta: {
                            title: '角色管理',
                            icon: 'drag',
                            iconType: 'svg'
                        }
                    }
                ]
            },
            {
                path: 'collection',
                name: 'Collection',
                redirect: '/collection/task',
                meta: {
                    title: '数据采集',
                    icon: 'dict',
                    iconType: 'svg'
                },
                children: [
                    {
                        path: 'task',
                        name: 'TaskManage',
                        component: TaskManage,
                        meta: {
                            title: '采集任务',
                            icon: 'drag',
                            iconType: 'svg'
                        }
                    },
                    {
                        path: 'device',
                        name: 'DeviceConfig',
                        component: DeviceConfig,
                        meta: {
                            title: '设备配置',
                            icon: 'form',
                            iconType: 'svg'
                        }
                    }
                ]
            },
            {
                path: 'analysis',
                name: 'Analysis',
                redirect: '/analysis/data',
                meta: {
                    title: '数据分析',
                    icon: 'lock',
                    iconType: 'svg'
                },
                children: [
                    {
                        path: 'data',
                        name: 'DataAnalysis',
                        component: DataAnalysis,
                        meta: {
                            title: '数据分析',
                            icon: 'form',
                            iconType: 'svg'
                        }
                    },
                    {
                        path: 'report',
                        name: 'ReportView',
                        component: ReportView,
                        meta: {
                            title: '分析报表',
                            icon: 'dict',
                            iconType: 'svg'

                        }
                    }
                ]
            },
            {
                path: 'security',
                name: 'Security',
                redirect: '/security/tlcp',
                meta: {
                    title: '安全管理',
                    icon: 'form',
                    iconType: 'svg'
                },
                children: [
                    {
                        path: 'tlcp',
                        name: 'TLCPConfig',
                        component: TLCPConfig,
                        meta: {
                            title: 'TLCP配置',
                            icon: 'icon',
                            iconType: 'svg'
                        }
                    },
                    {
                        path: 'algorithm',
                        name: 'AlgorithmManage',
                        component: AlgorithmManage,
                        meta: {
                            title: '国密算法',
                            icon: 'color',
                            iconType: 'svg'
                        }
                    }
                ]
            },
            {
                path: 'monitor',
                name: 'Monitor',
                redirect: '/monitor/realtime',
                meta: {
                    title: '系统监控',
                    icon: 'monitor',
                    iconType: 'svg'
                },
                children: [
                    {
                        path: 'realtime',
                        name: 'RealtimeMonitor',
                        component: RealtimeMonitor,
                        meta: {
                            title: '实时监控',
                            icon: 'form',
                            iconType: 'svg'
                        }
                    },
                    {
                        path: 'alert',
                        name: 'AlertManage',
                        component: AlertManage,
                        meta: {
                            title: '告警管理',
                            icon: 'dict',
                            iconType: 'svg'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', // 404页面
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('tlcp-token')
    if (to.name !== 'Login' && !isAuthenticated) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router