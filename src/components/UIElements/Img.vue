<script setup>
const props_data = defineProps({
  image_src: {
    type: String,
    default: () => '',
    required: true,
  },
  image_alt: {
    type: String,
    default: () => '',
    required: true,
  },
  image_loading: {
    type: String,
    default: () => '',
    required: true,
  },
})

let imgUrl = props_data.image_src;

// Conditionally replace '@/' with '/src/' only if it's used in a custom component
if (import.meta.env.MODE !== 'production') {
  imgUrl = `${props_data.image_src}`.replace('@/', '/src/');
}
</script>

<template>
  <img
    src="@/assets/images/lazy_placeholder.png"
    :data-src="imgUrl"
    :alt="props_data.image_alt"
    :loading="props_data.image_loading"
  />
</template>
