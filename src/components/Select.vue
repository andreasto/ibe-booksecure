<template>
    <div>
         <!-- selectedFlights: {{selectedFlights}}<br>
        selectedFlightsInLegs: {{selectedFlightsInLegs}} -->
        <div v-for="(leg, index) in availability" class="leg clearfix">
            <ibe-flight-header :index="index"></ibe-flight-header>
            <div v-show="!legsExpanded[index]" class="selected-flight">
                <ibe-flight :flight="selectedFlightsInLegs[index] ? selectedFlightsInLegs[index] : leg[0]" :leg="index"></ibe-flight>
            </div>

            <div v-for="flight in leg" v-show="legsExpanded[index]">
                <ibe-flight :flight="flight" :leg="index"></ibe-flight>
            </div>

            <div class="more-flights-button">
                <ibe-button v-show="!legsExpanded[index]" :action="() => {toggleLeg(index)}" :text="additionalFlightsExpandText" :cssClass="'button-link'" :icon-left="'&#xE145;'"></ibe-button>
                <ibe-button v-show="legsExpanded[index]" :action="() => {toggleLeg(index)}" :text="additionalFlightsCollapseText" :cssClass="'button-link'" :icon-left="'&#xE15B;'"></ibe-button>
            </div>
        </div>

        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
    </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
import Flight from '@/components/flight/Flight'
import FlightHeader from '@/components/flight/FlightHeader'

export default {
    created() {
        this.availability.forEach((availability) => {
            this.legsExpanded.push(false)
        })
    },
    data() {
        return {
            legsExpanded: [],
            additionalFlightsExpandText: window.bookSecure.texts.additionalFlightsExpandText,
            additionalFlightsCollapseText: window.bookSecure.texts.additionalFlightsCollapseText
        }
    },
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
        ),
        selectedFlightsInLegs() {
            let selectedFlights = []

            this.availability.forEach((leg, index) => {
                leg.forEach((flight) => {
                    if (flight.selected) {
                        selectedFlights.push(flight)
                    }
                })
                if (selectedFlights.length - 1 < index) {
                    selectedFlights.push(undefined)
                }
            })
            return selectedFlights
        }
    },
    methods: {
        toggleLeg(index) {
            this.legsExpanded.splice(index, 1, !this.legsExpanded[index])
        },
        previousAction() {
            router.push('search')
        },
        nextAction() {
            console.log('go next')
            if (!this.allFlightsSelected) {
                console.log('select flights for all legs first')
                // todo: show message to user
                return
            }

            this.$store.dispatch('navigation/navigateTo', 'information')
        }
    },
    components: {
        'ibe-flight': Flight,
        'ibe-flight-header': FlightHeader
    }
}
</script>

<style lang="scss">
.more-flights-button {
    text-align: center;
}
</style>
