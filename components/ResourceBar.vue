<template>
  <div class="resource-bar">
    <div class="mb-8">
      <fa class="icon-food" icon="utensils" />
      <div class="count">{{ resources.food.count }}</div>
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
  @apply leading-snug text-4xl;
}
.icon-food {
  @apply text-yellow-400;
}
.icon-water {
  @apply text-blue-400;
}
.icon-poop {
  color: #896031;
}
</style>
