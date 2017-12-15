import Vue from 'vue'
import Vuex from 'vuex'
import uba from './uba'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    uba
  },
  strict: debug
})
