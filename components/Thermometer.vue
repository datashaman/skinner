<template>
  <div class="thermometer">
    <vue-thermometer
      :options="options"
      :value="temperature"
      :min="30"
      :max="52"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    options: {
      text: {
        color: 'white',
        fontSize: 10,
        textAdjustmentY: 2,
        fontFamily: 'Arial',
        textEnabled: true,
      },
      thermo: {
        color: '#FF0000',
        backgroundColor: '#ffffff',
        frameColor: 'white',
        ticks: 10,
        ticksEnabled: true,
        tickColor: 'white',
        tickWidth: '1',
      },
      layout: {
        height: 300,
        width: 90,
      },
    },
  }),
  computed: {
    ...mapState(['temperature']),
  },
}
</script>
