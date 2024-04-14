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
    <form 
        :id="props_data.id_name ? props_data.id_name : null"
        :class="`my-5 p-5 rounded-lg ${props_data.additional_class}`">
        <slot></slot>
    </form>
</template>