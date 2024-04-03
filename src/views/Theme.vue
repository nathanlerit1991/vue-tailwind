<script setup>
import { ref } from 'vue'
import customConfig from '@/theme/theme.json';

import SectionWrapper from '@/components/SectionWrapper.vue'
import ContainerWrapper from '@/components/ContainerWrapper.vue'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'

// Define a reactive reference to hold the temporary configuration
const temporaryConfigStorage = ref(customConfig);

// Function to save the configuration
const saveConfig = () => {
  // Assign the values from temporary storage to customConfig
  Object.assign(customConfig, temporaryConfigStorage.value);
  // Update the configuration in the backend or local storage
  localStorage.setItem('themeCSS', JSON.stringify(customConfig));
}
</script>



<template>
  <SectionWrapper>
    <ContainerWrapper>
      <Row v-for="(category, categoryName) in temporaryConfigStorage" :key="categoryName">
        <Column>
          <h3 class="uppercase text-lg font-bold mb-3">{{ categoryName }}</h3>
        </Column>
        <Column v-for="(colorValue, classLabel) in category" :key="classLabel" additional_class="sm:w-3/12">
          <div class="mb-4">
            <div>
              <label class="flex items-center mb-1">
                {{ classLabel }}
                <div
                  class="mx-2"
                  style="width: 20px; height: 20px; border: solid 1px #d1d1d1; border-radius: 3px;" 
                  :style="{ 'background-color': category[classLabel] }"
                  v-if="classLabel.includes('color')"
              /></label>
              
              <input v-model="category[classLabel]" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full" />
            </div>
          </div>
        </Column>
        <Column>
          <hr style="margin: 40px 0 60px 0"/>
        </Column>
      </Row>
    </ContainerWrapper>
  </SectionWrapper>

  <SectionWrapper>
    <ContainerWrapper>
      <Row>
        <Column>
          <button @click="saveConfig" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
            Save
          </button>
        </Column>
      </Row>
    </ContainerWrapper>
  </SectionWrapper>
</template>




