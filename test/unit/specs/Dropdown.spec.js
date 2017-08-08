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
    let vm = wrapper.vm

    it('label is outputted correctly', () => {
        let labelText = wrapper.find('.floating-label')[0].text()
        expect(labelText.length).to.be.above(0)
        expect(labelText).to.equal(vm.label)
    })

    it('has items', () => {
        const items = vm.items
        expect(items.length).to.be.above(0)
    })

    it('outputs list elements to DOM', () => {
        const listElements = wrapper.find('li')
        expect(listElements.length).to.equal(vm.items.length)
    })

    it('selectItem methods sets correct value', () => {
        wrapper.vm.selectItem('Miss', 1)

        expect(vm.selectedIndex).to.equal(1)
        expect(vm.selectedText).to.equal('Miss')
    })

    it('toggleDropDown changes variable correctly', () => {
        let showDropDownInitialValue = JSON.parse(JSON.stringify(vm.showDropDown))
        vm.toggleDropDown()

        expect(vm.showDropDown).to.not.be.equal(showDropDownInitialValue)
    })

    it('list is hidden initially', () => {
        let list = wrapper.find('.dropdown-list')[0]

        expect(list.hasStyle('display', 'none')).to.equal(true)
    })

    it('toggleDropDown displays list on UI', () => {
        vm.closeDropDown()
        vm.toggleDropDown()

        wrapper.update()
        let list = wrapper.find('.dropdown-list')[0]
        expect(list.hasStyle('display', 'none')).to.equal(false)
    })

    it('closeDropDown changes variable correctly', () => {
        vm.showDropDown = true
        vm.closeDropDown()

        expect(vm.showDropDown).to.equal(false)
    })

    it('value is being set when clicking list item', () => {
        let listItem = wrapper.find('li')[1]
        listItem.trigger('click')

        expect(vm.selectedText).to.equal('Miss')
    })
    it('class .selected is being set to selected item', () => {
        let listItem = wrapper.find('li')[1]
        listItem.trigger('click')

        let selectedItem = wrapper.find('.selected')[0]

        expect(selectedItem).to.exist
    })
})
