<template>
  <div class="container flex animation-none" @selectstart.prevent>
    <div class="flex-none p-4">
      <div class="health-bar">
        <HealthBar :attr="attr.health" class="mb-4" />
        <HealthBar :attr="attr.sanity" class="mb-4" />
        {{ clicks }}<br />
        {{ cps }}
      </div>
      <Thermometer />
    </div>

    <div class="flex-grow text-center p-4">
      <Screen />
      <ButtonBar />
    </div>

    <div class="flex-none p-4">
      <ResourceBar />
      <Feeder />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import ButtonBar from '~/components/ButtonBar'
import Feeder from '~/components/Feeder'
import HealthBar from '~/components/HealthBar'
import ResourceBar from '~/components/ResourceBar'
import Screen from '~/components/Screen'
import Thermometer from '~/components/Thermometer'

import kefir from '~/mixins/kefir'

export default {
  components: {
    ButtonBar,
    Feeder,
    HealthBar,
    ResourceBar,
    Screen,
    Thermometer,
  },
  mixins: [kefir],
  data: () => ({
    cps: 0,
    subscriptions: [],
  }),
  computed: {
    ...mapState(['attr', 'clicks']),
  },
  mounted() {
    this.subscribe(
      this.$clicks.observe(args => {
        this.$store.commit('click', args)
      })
    )

    this.subscribe(
      this.bufferBySecond(this.$clicks).observe(clicks => {
        this.cps = clicks.length
      })
    )
  },
}
</script>
<style scoped>
.button-bar {
}
.health-bar {
  @apply text-center pb-4;
}
.thermometer {
}
.resource-bar {
}
.screen {
  height: 100%;
}
</style>
