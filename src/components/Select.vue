<template>
    <div>
        <!-- selectedFlights: {{selectedFlights}}
        <p>selectedFlightsInRoutes: {{selectedFlightsInRoutes.length}}</p> -->
        <div v-for="(route, index) in availability" class="route clearfix">
            <ibe-flight-header :index="index"></ibe-flight-header>
            <div v-show="!routesExpanded[index]" class="selected-flight">
                <ibe-flight :flight="selectedFlightsInRoutes[index] ? selectedFlightsInRoutes[index] : route[0]" :route="index"></ibe-flight>
            </div>
            <div v-for="flight in route" v-show="routesExpanded[index]">
                <ibe-flight :flight="flight" :route="index"></ibe-flight>
            </div>

            <div class="more-flights-button">
                <ibe-button v-show="!routesExpanded[index]" :action="() => {toggleRoute(index)}" :text="additionalFlightsExpandText" :cssClass="'button-link'" :icon-left="'&#xE145;'"></ibe-button>
                <ibe-button v-show="routesExpanded[index]" :action="() => {toggleRoute(index)}" :text="additionalFlightsCollapseText" :cssClass="'button-link'" :icon-left="'&#xE15B;'"></ibe-button>
            </div>
        </div>

        <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
    </div>
</template>

<script>
import router from '@/router'
import _ from 'lodash'
import { mapGetters } from 'vuex'
import Flight from '@/components/flight/Flight'
import FlightHeader from '@/components/flight/FlightHeader'

export default {
    created() {
        this.availability.forEach((availability) => {
            this.routesExpanded.push(false)
        })
    },
    data() {
        return {
            routesExpanded: [],
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
        selectedFlightsInRoutes() {
            let selectedFlights = []

            this.availability.forEach((route, index) => {
                route.forEach((flight) => {
                    let flightIsSelected = _.find(this.selectedFlights, { id: flight.Id, key: flight.Key, route: index })
                    if (flightIsSelected) {
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
        toggleRoute(index) {
            this.routesExpanded.splice(index, 1, !this.routesExpanded[index])
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
