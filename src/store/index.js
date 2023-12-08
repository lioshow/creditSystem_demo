import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import userLoggedState from './modules/userLoggedState'
import level from './modules/level'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: 所有组件共享的数据，类似data
  state: {
  },
  // getters：计算属性，类似get
  getters: {
  },
  // 更改 Vuex 的 store 中的状态，类似set
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    userLoggedState,
    level
  }
})
