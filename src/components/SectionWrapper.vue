<script setup>
    const props_data = defineProps({
        additional_class: {
            type: String,
            default: () => ""
        },
        id_name: {
            type: String,
            default: () => ""
        }
    })
</script>
<template>
    <section
        :id="props_data.id_name ? props_data.id_name : null"
        :class="`py-section ${props_data.additional_class}`">
        <slot></slot>
    </section>
</template>