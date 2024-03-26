<template>
    <div class="p-4">
      <div v-for="(properties, className) in customConfig" :key="className" class="mb-6">
        <h3 class="text-lg font-bold mb-2">{{ className }}</h3>
        <div v-for="(value, property) in properties" :key="property" class="mb-4">
          <label class="block mb-1">
            {{ property === 'color' ? 'Font Color' : property === 'background-color' ? 'Background Color' : '' }}
          </label>
          <input v-model="properties[property]" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
      </div>
      <button @click="saveConfig" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
        Save
      </button>
    </div>

    <button class="btn-primary">SAMPLE</button>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  import customConfig from '@/theme/theme.json';
  
  const customConfigRef = ref(customConfig);
  
  const saveConfig = () => {
    // Update the original customConfig object with the modified values
    Object.assign(customConfig, customConfigRef.value);
    // You might want to save the configuration to localStorage or a server here
  }
  </script>