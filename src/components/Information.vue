<template>
    <div>
        <form @submit.prevent="nextAction">
            <ibe-contact-information :contact-info="contactInformation"></ibe-contact-information>

            <div v-for="(passenger, index) in passengerList">
                <ibe-passenger :passenger="passenger" :index="index + 1"></ibe-passenger>
            </div>
        </form>

        <ibe-notification-box type="error" v-if="formSubmitted && hasErrors">
            Please correct the following errors before you continue:<br>
            <div v-for="{msg} in uniqueErrors">
                {{msg}}
            </div>
        </ibe-notification-box>
        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction" :nextDisabled="formSubmitted && hasErrors"></ibe-previous-next>
    </div>
</template>

<script>
import _ from 'lodash'
import router from '@/router'
import { mapGetters } from 'vuex'
import Passenger from '@/components/Passenger'
import ContactInformation from '@/components/ContactInformation'
import NotificationBox from '@/components/NotificationBox'

export default {
    $validates: true,
    created() {
        for (let i = 0; i < this.passengers.adults; i++) {
            this.passengerList.push({
                type: 'adult',
                tile: 'Mr',
                firstName: 'Steven',
                lastName: 'Summersville'
            })
        }
        for (let i = 0; i < this.passengers.children; i++) {
            this.passengerList.push({
                type: 'child',
                tile: 'Miss',
                firstName: 'Junior',
                lastName: 'Summersville'
            })
        }
        for (let i = 0; i < this.passengers.infants; i++) {
            this.passengerList.push({
                type: 'infant',
                tile: 'Miss',
                firstName: 'Mini',
                lastName: 'Summersville'
            })
        }
    },
    components: {
        'ibe-passenger': Passenger,
        'ibe-contact-information': ContactInformation,
        'ibe-notification-box': NotificationBox
    },
    data() {
        return {
            passengerList: [],
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
                'contactInformation'
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
                console.log('result', result)
                console.log('errors.any()', this.errors)

                if (result) {
                    this.formIsValid = true
                    this.$store.commit('navigation/unlock', 'options')
                    this.$store.dispatch('navigation/navigateTo', 'options')
                    return
                }

                this.formIsValid = false
            }).catch(() => {
                this.formIsValid = false
            })
        }
    }
}
</script>
