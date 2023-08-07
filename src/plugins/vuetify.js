/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'material-icons-font/material-icons-font.css';
import 'vuetify/styles'
import iTelegram from '@/components/icons/iTelegram.vue'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#CDDC39',
          secondary: '#DCE775',
          first: '#9E9D24',
          second: '#673AB7', //sideblock
          third: '#F9A825', //blue-grey-darken-1
          background: '#546E7A', //deep-purple
          wrapper: '#CDDC39', //lime
          test: '#E65100',
          textFirst: '#263238', // hero
          textSecond: '#FFFDE7', // hero
          textThird: '#607D8B',
          bgFirst: '#ECEFF1', //
          bgSecond: '#546E7A', // hero
          bgThird: '#CFD8DC', // hero
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
