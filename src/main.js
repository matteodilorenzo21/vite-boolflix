import { createApp } from 'vue'

import '@fontsource/bebas-neue';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/scss/style.scss';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import { faStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar);

import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
