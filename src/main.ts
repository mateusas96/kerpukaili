import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { i18n, t } from './helpers/i18n';

import App from './App.vue';
import router from './router';

library.add(fas, far, fab);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('fa-icon', FontAwesomeIcon);
app.use(i18n);

app.mount('#app');

document.title = t('COMPANY_NAME_TEXT');
