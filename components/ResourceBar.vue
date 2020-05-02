<template>
  <div class="resource-bar">
    <div class="mb-8">
      <fa class="icon-seed" icon="egg" />
      <div class="count">{{ resources.seed.count }}</div>
    </div>
    <div class="mb-8">
      <fa class="icon-water" icon="tint" />
      <div class="count">{{ resources.water.count }}</div>
    </div>
    <div class="mb-8">
      <fa class="icon-poop" icon="poo" />
      <div class="count">{{ resources.poop.count }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['resources']),
  },
}
</script>
<style scoped>
.resource-bar {
  @apply leading-snug text-right text-4xl;
}
.icon-seed {
  @apply text-yellow-400;
  position: relative;
  right: -3px;
}
.icon-water {
  @apply text-blue-400;
  position: relative;
  right: -2px;
}
.icon-poop {
  position: relative;
  right: -7px;
  color: #896031;
}
</style>
