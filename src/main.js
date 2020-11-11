import { createApp, h } from 'vue'
import Demo from './demo/Demo.vue'
import Vue100vh from './vue100vh'

// Make Vue app
createApp({ render: () => h(Demo) })
    .component('Vue100vh', Vue100vh)
    .mount('#app')
