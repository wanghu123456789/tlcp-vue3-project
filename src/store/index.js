import { createStore } from 'vuex'

export default createStore({
    state: {
        token: localStorage.getItem('tlcp-token') || ''
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('tlcp-token', token)
        },
        LOGOUT(state) {
            state.token = ''
            localStorage.removeItem('tlcp-token')
        }
    },
    actions: {
        login({ commit }, token) {
            commit('SET_TOKEN', token)
        },
        logout({ commit }) {
            commit('LOGOUT')
        }
    }
})