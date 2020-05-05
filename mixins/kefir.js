import Kefir from 'kefir'

export default {
  data: () => ({
    subscriptions: [],
  }),
  methods: {
    bufferBySecond(observable) {
      return observable.bufferBy(
        Kefir.withInterval(1000, emitter => emitter.emit())
      )
    },
    streamClickEvents(el, cb) {
      const stream = Kefir.fromEvents(el, 'click', cb)
      this.$clicks.plug(stream)
      return stream
    },
    subscribe(observable) {
      return this.subscriptions.push(observable)
    },
  },
  beforeDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
    delete this.subscriptions
  },
}
