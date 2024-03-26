<script setup>
    import SectionWrapper from '@/components/SectionWrapper.vue'
    import ContainerWrapper from '@/components/ContainerWrapper.vue'
    import Row from '@/components/Row.vue'
    import Column from '@/components/Column.vue'

    import Img from '@/components/UIElements/Img.vue'
    import Calendar from '@/components/UIElements/Calendar.vue'
    import Accordion from '@/components/UIElements/Accordion.vue'
</script>
<template>
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column>
                   <Accordion />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
</template>