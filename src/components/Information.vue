<template>
    <div>
        <form @submit.prevent="validateBeforeSubmit">
            <div v-for="(passenger, index) in passengers">
                <ibe-passenger :passenger="passenger" :index="index + 1"></ibe-passenger>
            </div>

            <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>

        </form>
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
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                // eslint-disable-next-line
                console.log(result)
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!')
            })
        },
        previousAction() {
            router.push('select')
        },
        nextAction() {
            console.log('next to options')

            // this.validateBeforeSubmit()

            // if (!this.formIsValid) {
            //     return
            // }

            this.$store.commit('navigation/unlock', 'options')
            this.$store.dispatch('navigation/navigateTo', 'options')
        },
        validateForm() {
            console.log('validate form')
            this.formIsValid = true
        }
    }
}
</script>
