import Kefir from 'kefir'
import Vue from 'vue'

const pool = Kefir.pool()

const Observables = {
  install(Vue, options) {
    Vue.prototype.$observables = {
      pool,
    }
  },
}

Vue.use(Observables)
