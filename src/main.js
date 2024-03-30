import './assets/sass/style.scss'
import 'tailwindcss/tailwind.css'
import customTheme from '@/theme/theme.json';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyLoadingPlugin } from '@/plugins/lazyLoading.js'

import App from './App.vue'
import router from './router'

// Generate CSS based on custom configuration
const generateStyles = (config) => {
  let styles = '';
  Object.entries(config).forEach(([className, properties]) => {
    styles += `.${className} {`;
    Object.entries(properties).forEach(([property, value]) => {
      styles += `${property}: ${value};`;
    });
    styles += `}`;
  });
  return styles;
};

const customStyles = generateStyles(customTheme);
// REMOVE THE IF STATEMENT WHEN THERES A BACKEND AVAILABLE //
const storedThemeCSS = localStorage.getItem('themeCSS');
if(storedThemeCSS) {
  // Parse storedThemeCSS back into an object
  const parsedThemeCSS = JSON.parse(storedThemeCSS);

  // Generate CSS styles from parsedThemeCSS object
  let parsedCustomStyles = '';
  Object.entries(parsedThemeCSS).forEach(([className, properties]) => {
    parsedCustomStyles += `.${className} {`;
    Object.entries(properties).forEach(([property, value]) => {
      parsedCustomStyles += `${property}: ${value};`;
    });
    parsedCustomStyles += `}`;
  });

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
app.use(lazyLoadingPlugin)
app.mount('#app')
