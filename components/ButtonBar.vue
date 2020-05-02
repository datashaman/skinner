<template>
  <div>
    <button v-for="button in room.buttons" :key="button.title">
      {{ button.title }}
    </button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['room']),
  },
}
</script>
