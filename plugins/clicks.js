import Kefir from 'kefir'
import Vue from 'vue'

Vue.use({
  install(Vue, options) {
    Vue.prototype.$clicks = Kefir.pool()
  },
})
