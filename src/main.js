/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import 'material-icons-font/material-icons-font.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";
// Composables
import { createApp } from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { inject } from '@vercel/analytics';
/* add icons to the library */
import { registerPlugins } from '@/plugins'

library.add(faUserSecret)

// Plugins

const app = createApp(App)

const analitics = inject()

registerPlugins(app)

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(analitics)
  .mount('#app')
