import Vue from 'vue'
import Router from 'vue-router'
import Information from '@/components/Information'
import Options from '@/components/Options'
import Payment from '@/components/Payment'
import Receipt from '@/components/Receipt'
import Search from '@/components/Search'
import Select from '@/components/Select'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: ['/search'],
            name: 'Home',
            component: Search
        },
        {
            path: '/search-form',
            name: 'SearchForm',
            component: Search
        },
        {
            path: '/select',
            name: 'Select',
            component: Select
        },
        {
            path: '/information',
            name: 'Information',
            component: Information
        },
        {
            path: '/options',
            name: 'Options',
            component: Options
        },
        {
            path: '/payment',
            name: 'Payment',
            component: Payment
        },
        {
            path: '/receipt',
            name: 'Receipt',
            component: Receipt
        }
    ]
})

router.beforeEach(handleAuthorization)

function handleAuthorization(to, from, next) {
    next()
    // todo: fix logic later
    // if (canAccess(to.name)) {
    //   next()
    // } else {
    //   next({ path: '/' })
    // }
}

// function canAccess(routeName) {
//   if (routeName === 'Select') {
//     store.dispatch('navigation/toggleError')
//     return false
//   }

//   return true
// }

export default router
