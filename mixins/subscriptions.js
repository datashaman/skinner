export default {
  data: () => ({
    subscriptions: [],
  }),
  methods: {
    subscribe(observable) {
      return this.subscriptions.push(observable)
    },
  },
  beforeDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
    delete this.subscriptions
  },
}
