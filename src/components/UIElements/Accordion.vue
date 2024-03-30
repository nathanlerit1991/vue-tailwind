<template>
    <div class="g-accordion group" :class="isOpen ? 'group-open' : ''">
      <div class="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-lg tbs-accordion-header-primary" @click="toggleAccordion">
        <slot name="header">
            <h2>What is a SAAS platform?</h2>
            <span class="transition-icon">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
        </slot>
      </div>
      <div class="content" :style="{ height: contentHeight + 'px' }">
        <div class="p-4 bg-gray-100">
            <slot name="body">
                <p class="p-3">
                SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.
                </p>
            </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    
    let isOpen = ref(false);
    let contentHeight = ref(0);
    
    const toggleAccordion = () => {
        isOpen.value = !isOpen.value;
        if (isOpen.value) {
        // When opened, set the height of the content dynamically
        contentHeight.value = getContentHeight();
        } else {
        // When closed, reset the height of the content to 0
        contentHeight.value = 0;
        }
    };
    
    function getContentHeight() {
        return document.querySelector('.content').scrollHeight;
    }
  </script>
  
  <style>
  .group .transition-icon {
    transform: rotate(0deg);
    transition: all 0.3s ease;
  }
  .group-open .transition-icon {
    transform: rotate(180deg);
  }
  
  .group > .content {
    overflow: hidden;
    transition: all 0.3s ease;
  }
</style>