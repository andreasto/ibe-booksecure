import Vue from 'vue'
import Button from '@/components/Button'
import 'es6-promise/auto'

describe('Button.vue', () => {
    const Constructor = Vue.extend(Button)

    const comp = new Constructor({
        propsData: {
            // Props are passed in "propsData".
            text: 'Button text',
            action: () => { },
            iconLeft: 'arrow-down'
        }
    }).$mount()

    it('gets a method as action prop', () => {
        let result = typeof comp.$props.action
        expect(result).to.equal('function')
    })

    it('gets default class .button', () => {
        let result = comp.$el.className
        expect(result).to.include('button')
    })

    it('sets padding class when passing icon as prop', () => {
        let result = comp.$el.querySelector('button').className
        expect(result).to.include('with-icon-left')
    })

    it('icon left is visible when passing in prop', () => {
        let result = comp.$el.querySelector('.button-icon-left')
        expect(result).to.not.be.null
    })

    it('icon right is visible when passing in prop', () => {
        const comp = new Constructor({
            propsData: {
                // Props are passed in "propsData".
                text: 'Button text',
                action: () => { },
                iconRight: 'arrow-down'
            }
        }).$mount()

        let result = comp.$el.querySelector('.button-icon-right')
        expect(result).to.not.be.null
    })
})
