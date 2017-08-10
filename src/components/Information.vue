<template>
    <div>
        <form @submit.prevent="nextAction">
            <div v-for="(passenger, index) in cartPassengers">
                <ibe-passenger :passenger="passenger" :index="index + 1"></ibe-passenger>
            </div>
        </form>

        <ibe-notification-box type="error" v-if="formSubmitted && hasErrors">
            Please correct the following errors before you continue:
            <br>
            <br>
            <div v-for="{msg} in uniqueErrors">
                {{msg}}
            </div>
        </ibe-notification-box>
        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
    </div>
</template>

<script>
import _ from 'lodash'
import router from '@/router'
import { mapGetters } from 'vuex'
import Passenger from '@/components/Passenger'
import NotificationBox from '@/components/NotificationBox'

export default {
    $validates: true,
    mounted() {
        let Passenger = function (type) {
            this.type = type || 'adult'
            this.title = ''
            this.firstName = ''
            this.lastName = ''
            this.dateOfBirth = ''
            this.contactInformation = {
                phone: '',
                mobile: '',
                workPhone: '',
                email: ''
            }
            this.addressInformation = {
                address: '',
                address2: '',
                zip: '',
                city: '',
                state: '',
                country: ''
            }
        }
        this.cartPassengers = []
        for (let i = 0; i < this.passengers.adults; i++) {
            this.cartPassengers.push(new Passenger())
        }
        for (let i = 0; i < this.passengers.children; i++) {
            this.cartPassengers.push(new Passenger('child'))
        }
        for (let i = 0; i < this.passengers.infants; i++) {
            this.cartPassengers.push(new Passenger('infant'))
        }
    },
    components: {
        'ibe-passenger': Passenger,
        'ibe-notification-box': NotificationBox
    },
    data() {
        return {
            formIsValid: true,
            formSubmitted: false
        }
    },
    computed: {
        ...mapGetters(
            'search',
            [
                'passengers',
                'totalPassengers'
            ]
        ),
        ...mapGetters(
            'cart',
            [
                'cartPassengers'
            ]
        ),
        hasErrors() {
            return this.errors.any()
        },
        uniqueErrors() {
            return _.uniqBy(this.errors.errors, 'msg')
        }
    },
    methods: {
        previousAction() {
            router.push('select')
        },
        nextAction() {
            console.log('next to options')
            this.formSubmitted = true

            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.formIsValid = true
                    this.$store.commit('navigation/unlock', 'options')
                    this.$store.dispatch('navigation/navigateTo', 'options')
                    return
                }

                this.invalidateForm()
            }).catch(() => {
                this.invalidateForm()
            })
        },
        invalidateForm() {
            this.formIsValid = false
            this.$store.commit('navigation/lock', 'options')
        }
    }
}
</script>
