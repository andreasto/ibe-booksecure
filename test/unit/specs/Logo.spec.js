import Vue from 'vue'
import Logo from '@/components/Logo'
import 'es6-promise/auto'

describe('Logo.vue', () => {
    const Constructor = Vue.extend(Logo)

    const comp = new Constructor({
        propsData: {
            title: 'Some random title'
        }
    }).$mount()

    it('has title', () => {
        let result = comp.$props.title.length
        expect(result).to.be.above(0)
    })
})
