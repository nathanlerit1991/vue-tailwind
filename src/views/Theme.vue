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
      <Row class="py-5" v-for="(category, categoryName) in temporaryConfigStorage" :key="categoryName">
        <Column>
          <h3 class="uppercase mb-3">{{ categoryName }}</h3>
        </Column>
        <Column v-for="(colorValue, colorName) in category" :key="colorName" additional_class="sm:w-3/12">
          <div class="mb-4">
            <div>
              <label class="block mb-1 font-bold">{{ colorName }}</label>
              <input v-model="category[colorName]" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full" />
            </div>
          </div>
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




