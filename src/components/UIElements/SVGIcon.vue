<script setup>
import { defineAsyncComponent } from 'vue'

const props_data = defineProps({
  icon: {
    type: String,
    required: true,
  },
  stroke: {
    type: String,
  },
  fill: {
    type: String,
  },
  width: {
    type: String,
    default: () => '25',
  },
  height: {
    type: String,
    default: () => '25',
  },
})
const dynamicComponent = defineAsyncComponent(
  () => import(`@/components/SVG/${props_data.icon}.vue`),
)
</script>

<template>
  <component
    :is="dynamicComponent"
    :stroke="props_data.stroke"
    :fill="props_data.fill"
    :width="props_data.width"
    :height="props_data.height"
  />
</template>
