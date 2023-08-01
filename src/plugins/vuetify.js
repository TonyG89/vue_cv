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
          second: '#673AB7', //indigo
          third: '#546E7A', //blue-grey-darken-1
          background: '#546E7A', //deep-purple
          wrapper: '#CDDC39', //lime
          test: '#E65100',
          textFirst: '#999D1A',
          textSecond: '#546E7A',
          textThird: '#546E7A',
          bgFirst: '#999D1A',
          bgSecond: '#546E7A',
          bgThird: '#292930',
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
