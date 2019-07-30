import { OK } from '../util'

const state = {
                    user:null,
                    apiStatus:null
}

const getters = {
  // checkはログインチェックに使用
  // 確実に真偽値を判定するため二重否定
  check: state => !! state.user,
  username: state => state.user ? state.user.name : ''
  
}

const mutations = {
                    setUser (state, user) {
                                        state.user = user
                    },
                    setApiStatus (state, status) {
                      state.apiStatus = status
                    }
}

const actions = {
                    async register (context, data) {
                                        const response = await axios.post('/api/register', data)
                                        context.commit('setUser', response.data)
                    },
                    async login (context, data) {
                                        context.commit('setApiStatus', null)
                                        const response = await axios.post('/api/login', data).catch(err => err.response || err)

                                        if (response.status === OK) {
                                        context.commit('setApiStatus', true)
                                        context.commit('setUser', response.data)
                                        return false
                                        }

                                        context.commit('setApiStatus', false)
                                        context.commit('error/setCode', response.status, { root: true })
                    },
                    async logout (context) {
                      const response = await axios.post('/api/logout')
                      context.commit('setUser', null)
                    },
                    async currentUser (context) {
                      const response = await axios.get('/api/user')
                      // ログインしていないとから文字になる
                      // userステートの初期値で揃えるために真偽値チェックでnullを入れる
                      const user = response.data || null
                      context.commit('setUser', user)
                    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}