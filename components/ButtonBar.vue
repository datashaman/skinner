<template>
  <div class="button-bar" style="transform: rotateX(50deg);">
    <Button
      v-for="button in room.buttons"
      :key="button.title"
      :button="button"
      :class="button.class"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import Button from '~/components/Button'

export default {
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['room']),
  },
}
</script>
<style>
.button-bar {
  @apply bg-gray-300 border-solid border-4 border-gray-500 p-4 rounded-lg;
}
</style>
