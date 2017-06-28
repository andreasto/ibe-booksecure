// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

import Button from '@/components/Button'
import Datepicker from '@/components/Datepicker'
import Dropdown from '@/components/Dropdown'
import Input from '@/components/Input'
import PassengerSelect from '@/components/PassengerSelect'
import Loader from '@/components/Loader'

Vue.config.productionTip = false

Vue.use(VeeValidate)

Vue.component('ibe-button', Button)
Vue.component('ibe-datepicker', Datepicker)
Vue.component('ibe-dropdown', Dropdown)
Vue.component('ibe-input', Input)
Vue.component('ibe-passenger-select', PassengerSelect)
Vue.component('ibe-loader', Loader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})