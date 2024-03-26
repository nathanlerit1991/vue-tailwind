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

  //Vite for binding image
  const imgUrl = new URL(
    `../../assets/images/${props_data.image_src}`,
    import.meta.url,
  ).href
</script>

<template>
  <img
    src="@/assets/images/lazy_placeholder.png"
    :data-src="imgUrl"
    :alt="props_data.image_alt"
    :loading="props_data.image_loading"
  />
</template>
