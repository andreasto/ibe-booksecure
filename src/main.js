// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

const validationMessages = window.bookSecure.validationMessages
const validationDictionary = {
    en: {
        messages: {
            required: () => validationMessages.required,
            email: () => validationMessages.email
        }
    }
}

VeeValidate.Validator.updateDictionary(validationDictionary)

Vue.config.productionTip = false

Vue.use(VeeValidate, {
    inject: false
})

// Directives
import ClickOutside from '@/directives/ClickOutside'
Vue.directive('click-outside', ClickOutside)

// Components
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import Input from '@/components/Input'
import PassengerSelect from '@/components/PassengerSelect'
import Loader from '@/components/Loader'
import Datepicker from '@/components/Datepicker'
import PreviousNext from '@/components/PreviousNext'
Vue.component('ibe-button', Button)
Vue.component('ibe-dropdown', Dropdown)
Vue.component('ibe-input', Input)
Vue.component('ibe-passenger-select', PassengerSelect)
Vue.component('ibe-loader', Loader)
Vue.component('ibe-datepicker', Datepicker)
Vue.component('ibe-previous-next', PreviousNext)

// eslint-disable-next-line
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
