import { createApp } from 'vue'
import App from './App.vue'

document.addEventListener('click', (event) => {
    event.preventDefault();
});

createApp(App).mount('#app')
