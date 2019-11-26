import Vue from 'vue'
import Vuex from 'vuex'
import detailPage from './modules/detailPage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
modules: {
    detailPage
},
strict: debug,
})
