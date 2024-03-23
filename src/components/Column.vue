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
    <div 
        :id="props_data.id_name ? props_data.id_name : null"
        :class="`w-full px-default ${props_data.additional_class}`">
        <slot></slot>
    </div>
</template>