import { mount } from 'avoriaz'
import Dropdown from '@/components/Dropdown'
import ClickOutside from '@/directives/ClickOutside'
import 'es6-promise/auto'

describe('Dropdown.vue', () => {
    const propsData = {
        label: 'Some label',
        value: 'Mr',
        items: ['Mr', 'Miss', 'Mrs', 'Boy']
    }
    const wrapper = mount(Dropdown, {
        propsData,
        directives: {
            ClickOutside
        }
    })

    it('has mounted function', () => {
        it(typeof Dropdown.mounted).to.equal('function')
    })

    it('label is outputted correctly', () => {
        const label = wrapper.find('.floating-label')[0]
        console.log(label)
        expect(wrapper.vm.label.length).to.be.above(0)
        expect(wrapper.contains('.floating-label')).to.equal(true)
    })

    it('has items', () => {
        const items = wrapper.vm.items
        expect(items.length).to.be.above(0)
        console.log('items', items)
    })
})
