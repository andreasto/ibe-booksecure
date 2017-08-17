<template>
    <div>
        <div v-for="(leg, index) in availability" class="leg clearfix">
            <h3>Leg {{index + 1}}</h3>
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
import _ from 'lodash'
import { mapGetters } from 'vuex'
import Flight from '@/components/flight/Flight'

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
            _.flatten(this.availability).forEach((avail) => {
                if (avail.selected) {
                    selectedFlights.push(avail)
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
        'ibe-flight': Flight
    }
}
</script>

<style lang="scss">
.more-flights-button {
    text-align: center;
}
</style>
