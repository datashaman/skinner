<template>
  <div>
    <div class="w-32">
      <HealthBar id="health" class="mb-4" />
      <HealthBar id="sanity" />
    </div>

    <ResourceBar />
    <Screen />
    <ButtonBar />
    <Feeder />
  </div>
</template>
<script>
import ButtonBar from '~/components/ButtonBar'
import Feeder from '~/components/Feeder'
import ResourceBar from '~/components/ResourceBar'
import Screen from '~/components/Screen'

export default {
  components: {
    ButtonBar,
    Feeder,
    ResourceBar,
    Screen,
  },
}
</script>
<style scoped>
.health-bar {
  @apply absolute top-0 left-0 m-10 ml-4;
}
.resource-bar {
  @apply absolute top-0 right-0 m-10;
}
</style>
