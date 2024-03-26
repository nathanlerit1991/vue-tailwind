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
                <Column v-for="n in 32" additional_class="sm:w-1/4">
                   <Img 
                    :image_src="`naruto/${n}.jpg`" 
                    :image_alt="`alt${n}`"
                    image_loading="lazy"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column v-for="n in 32" additional_class="sm:w-1/4">
                   <Img 
                    :image_src="`naruto/${n}.jpg`" 
                    :image_alt="`alt${n}`"
                    image_loading="lazy"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <ContainerWrapper>
            <Row>
                <Column v-for="n in 32" additional_class="sm:w-1/4">
                   <Img 
                    :image_src="`naruto/${n}.jpg`" 
                    :image_alt="`alt${n}`"
                    image_loading="lazy"
                    />
                </Column>
            </Row>
        </ContainerWrapper>
    </SectionWrapper>
</template>

<style>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>