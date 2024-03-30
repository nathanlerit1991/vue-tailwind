<script setup>
import { ref } from 'vue'
import customConfig from '@/theme/theme.json';
import SectionWrapper from '@/components/SectionWrapper.vue'
import ContainerWrapper from '@/components/ContainerWrapper.vue'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'

// REMOVE THIS IF BACKEND IS AVAILABLE //
let initialConfig = '';
const storedConfig = localStorage.getItem('themeCSS');
if (storedConfig) {
  initialConfig = JSON.parse(storedConfig);
} else {
  initialConfig = customConfig
}
const temporaryConfigStorage = ref(initialConfig);
// END REMOVE THIS IF BACKEND IS AVAILABLE //


// UNCOMMENT WHEN BACKEND IS AVAILABLE //
// const temporaryConfigStorage = ref(customConfig);
const saveConfig = () => {
  Object.assign(customConfig, temporaryConfigStorage.value);
  //Add code to push the data customConfig to backend


  // REMOVE THIS IF BACKEND IS AVAILABLE //
  localStorage.setItem('themeCSS', JSON.stringify(customConfig));
  // END REMOVE THIS IF BACKEND IS AVAILABLE //
}


// Method to generate button style based on properties
const generateStyle = (properties) => {
  // Initialize an empty string for style
  let style = '';
  // Iterate through properties and append style
  for (const [key, value] of Object.entries(properties)) {
    // Convert camelCase to kebab-case for CSS properties
    const cssProperty = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    // Append CSS property and value
    style += `${cssProperty}: ${value};`;
  }
  // Return the generated style
  return style;
}


// Mapping object for property labels
const propertyLabels = {
  'background-color': 'Background Color',
  'color': 'Font Color',
  'font-size': 'Font Size',
  'font-weight': 'Font Weight',
  'padding-left': 'Padding Left',
  'padding-top': 'Padding Top',
  'padding-right': 'Padding Right',
  'padding-bottom': 'Padding Bottom',
  'border-radius': 'Border Radius',
  'border-color': 'Border Color',
  'border-width': 'Border Width',
  'border-style': 'Border Style',
};
</script>

<template>
  <SectionWrapper>
    <ContainerWrapper>
      <Row v-for="(properties, className) in temporaryConfigStorage" :key="className" >
        <Column>
          <h3 class="text-lg font-bold mb-2">{{ className }}</h3>
        </Column>
        <Column v-for="(value, property) in properties" :key="property" additional_class="sm:w-2/12">
          <div class="mb-4">
            <label class="block mb-1">
              {{ propertyLabels[property] }}
            </label>
            <input v-model="properties[property]" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
        </Column>
        <Column additional_class="mb-5">
          Preview: <button :class="className" :style="generateStyle(properties)">Text</button>
        </Column>
        <Column>
          <hr style="margin: 10px 0 20px 0"/>
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
