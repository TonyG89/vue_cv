/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'material-icons-font/material-icons-font.css';
import 'vuetify/styles'
import iTelegram from '@/components/iTelegram.vue'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          first: '#2196F3', // blue
          second: '#3F51B5', //indigo
          third: '#546E7A', //blue-grey-darken-1
          background: '#673AB7', //deep-purple
          wrapper: '#CDDC39', //lime
          test: '#E65100',
        },
      },
    },
    icons: {
      iconfont: 'fa', // Use 'md' for Google Material Icons
      values: {
        telegram: {
          component: iTelegram
        }
      }
    },
  },

})
