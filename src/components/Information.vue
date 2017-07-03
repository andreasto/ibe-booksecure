<template>
    <div>
        <div v-for="(passenger, index) in passengers">
            <ibe-passenger :passenger="passenger" :index="index + 1"></ibe-passenger>
        </div>

        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
    </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
import Passenger from '@/components/Passenger'

export default {
    created() {
        for (let i = 0; i < this.totalPassengers; i++) {
            this.passengers.push({
                tile: 'Miss',
                firstName: 'Mikael',
                lastName: 'Edebro',
                email: 'mikael.edebro@gmail.com',
                phone: '234432234'
            })
        }
    },
    components: {
        'ibe-passenger': Passenger
    },
    data() {
        return {
            passengers: [],
            formIsValid: false
        }
    },
    computed: {
        ...mapGetters(
            'search',
            [
                'totalPassengers'
            ])
    },
    methods: {
        previousAction() {
            router.push('select')
        },
        nextAction() {
            console.log('next to options')

            this.validateForm()

            if (!this.formIsValid) {
                return
            }

            this.$store.commit('navigation/unlockOptions')
            this.$store.dispatch('navigation/navigateTo', 'options')
        },
        validateForm() {
            console.log('validate form')
            this.formIsValid = true
        }
    }
}
</script>
