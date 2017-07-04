<template>
    <div>
        {{selectedFlights}} {{allFlightsSelected}}
        <div v-for="(leg, index) in availability" class="leg clearfix">
            <h3>Leg {{index + 1}}</h3>
            <div v-show="!showList" class="selected-flight">
                <ibe-flight :flight="leg[0]" :leg="index" v-show="!showList"></ibe-flight>
                <ibe-button :action="() => {showList = !showList}" :text="'Show more flights'" class="more-flights-button"></ibe-button>
            </div>

            <div v-for="flight in leg" v-show="showList">
                <ibe-flight :flight="flight" :leg="index"></ibe-flight>
            </div>
        </div>

        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
    </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
import Flight from '@/components/Flight'

export default {
    components: {
        'ibe-flight': Flight
    },
    data: () => ({
        showList: false
    }),
    computed: {
        ...mapGetters(
            'search',
            [
                'availability'
            ]
        ),
        ...mapGetters(
            'cart',
            [
                'selectedFlights',
                'allFlightsSelected'
            ]
        )
    },
    methods: {
        previousAction() {
            router.push('search')
        },
        nextAction() {
            console.log('go next')
            if (!this.allFlightsSelected) {
                console.log('select flights for all legs first')
                return
            }

            this.$store.dispatch('navigation/navigateTo', 'information')
        }
    }
}
</script>

<style lang="scss">
.selected-flight {
    margin-bottom: 20px;
}

.more-flights-button {
    float: right;
}
</style>
