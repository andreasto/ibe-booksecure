<template>
    <div>
        <h1>Options</h1>

        <ibe-options-container :title="'Special services'"></ibe-options-container>

        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
    </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
import OptionsContainer from '@/components/options/OptionsContainer'

export default {
    computed: {
        ...mapGetters(
            'cart',
            [
                'selectedFlights'
            ]
        )
    },
    methods: {
        previousAction() {
            router.push('information')
        },
        nextAction() {
            console.log('go next')

            this.$store.commit('navigation/unlock', 'payment')
            this.$store.dispatch('navigation/navigateTo', 'payment')
        }
    },
    components: {
        'ibe-options-container': OptionsContainer
    }
}
</script>
