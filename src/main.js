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

// Create a nonce for CSP
const nonce = 'nonce_value';
// Apply custom styles
const styleElement = document.createElement('style');
styleElement.setAttribute('nonce', nonce);
styleElement.textContent = customStyles;
document.head.appendChild(styleElement);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyLoadingPlugin)
app.mount('#app')
