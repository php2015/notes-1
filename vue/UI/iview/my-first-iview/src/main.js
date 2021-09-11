import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'

import VueI18n from 'vue-i18n';
import zh from 'iview/src/locale/lang/zh-CN';
import en from 'iview/src/locale/lang/en-US';

Vue.use(VueI18n);

Vue.locale = () => { };
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zh: Object.assign({ message: '你好' }, zh),
}
const i18n = new VueI18n({
  locale: 'en',
  messages
})


Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
