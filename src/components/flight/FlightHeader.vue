<template>
    <div class="flight-header">
        {{direction}} <span class="location-summary">{{locationSummary}}</span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import _ from 'lodash'

export default {
    props: {
        index: { type: Number, required: true }
    },
    computed: {
        direction() {
            if (this.index === 0) {
                return 'Outbound flights'
            } else if (this.index === 1) {
                return 'Return flights'
            } else {
                return 'Flight ' + this.index + 1
            }
        },
        locationSummary() {
            let departure = _.find(this.airports, { code: this.availability[this.index][0].departure })
            let arrival = _.find(this.airports, { code: this.availability[this.index][0].arrival })
            return `(${departure.name} - ${arrival.name})`
        },
        ...mapGetters(
            'search',
            [
                'airports',
                'criteria',
                'availability'
            ]
        )
    }
}
</script>

<style lang="scss" scoped>
.flight-header {
    font-size: 1.4em;
    margin-bottom: 10px;
}
.location-summary {
    display: inline-block;
    margin-left: 20px;
    color: rgba(0,0,0,.6);
    font-size: .8em;
}
</style>
