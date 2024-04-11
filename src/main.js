import './assets/sass/style.scss'
import 'tailwindcss/tailwind.css'
import customTheme from '@/theme/theme.json';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import VueLazyLoad from 'vue3-lazyload'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { lazyLoadingPlugin } from '@/plugins/lazyLoading.js'

import App from './App.vue'
import router from './router'

// Generate CSS based on custom configuration
const generateStyles = (config) => {
  let styles = ':root {';
  Object.entries(config).forEach(([category, properties]) => {
    Object.entries(properties).forEach(([className, value]) => {
      // Check if the value is an object to avoid applying as CSS variable
      if (typeof value !== 'object') {
        styles += `--${className}: ${value};`;
      }
    });
  });
  styles += '}';
  return styles;
};

const customStyles = generateStyles(customTheme);
// REMOVE THE IF STATEMENT WHEN THERES A BACKEND AVAILABLE //
const storedThemeCSS = localStorage.getItem('themeCSS');
if (storedThemeCSS) {
  // Parse storedThemeCSS back into an object
  const parsedThemeCSS = JSON.parse(storedThemeCSS);

  // Generate CSS styles from parsedThemeCSS object
  let parsedCustomStyles = ':root {';
  Object.entries(parsedThemeCSS).forEach(([category, properties]) => {
    Object.entries(properties).forEach(([className, value]) => {
      // Check if the value is an object to avoid applying as CSS variable
      if (typeof value !== 'object') {
        parsedCustomStyles += `--${className}: ${value};`; // Add -- before property name
      }
    });
  });
  parsedCustomStyles += '}';

  // Set the content of the styleElement to the parsed custom styles
  const styleElement = document.createElement('style');
  styleElement.textContent = parsedCustomStyles;
  document.head.appendChild(styleElement);
}
else {
  const styleElement = document.createElement('style');
  styleElement.textContent = customStyles;
  document.head.appendChild(styleElement);
}
// END REMOVE THE IF STATEMENT WHEN THERES A BACKEND AVAILABLE //




// const nonce = 'nonce_value';
// const styleElement = document.createElement('style');
// styleElement.setAttribute('nonce', nonce);
// styleElement.textContent = customStyles;
// document.head.appendChild(styleElement);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3ColorPicker)
app.use(VueLazyLoad)
app.mount('#app')
