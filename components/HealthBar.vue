<template>
  <div :class="maxClass">
    <div :class="valueClass" :style="valueStyle">&nbsp;</div>
  </div>
</template>
<script>
export default {
  props: {
    attr: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    iconClass() {
      return 'text-' + this.attr.icon.color + '-700 mr-2'
    },
    maxClass() {
      return 'bg-' + this.attr.color + '-300 rounded inline-block w-full'
    },
    valueClass() {
      return 'bg-' + this.attr.color + '-500 rounded-l h-8'
    },
    valueStyle() {
      return {
        width: parseInt((this.attr.value / this.attr.max) * 100) + '%',
      }
    },
  },
}
</script>
