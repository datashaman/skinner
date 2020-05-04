<template>
  <div class="rounded inline-block w-full" :class="attr.maxClass">
    <div class="rounded-l h-8" :class="attr.valueClass" :style="valueStyle">
      &nbsp;
    </div>
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
    valueStyle() {
      return {
        width: parseInt((this.attr.value / this.attr.max) * 100) + '%',
      }
    },
  },
}
</script>
