import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import AnimatedCounter from "vue-animated-counter"

const app = createApp(App)

// Using an animated counter external library
app.component("AnimatedCounter", AnimatedCounter)

app.mount('#app')
