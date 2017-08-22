<template>
    <div class="fare-type" @click="selectFlight" :class="classes" :style="{width: width}">
        <div class="type">{{fare.Name}}</div>
        <label class="radio-button price">
            <input type="radio" :checked="selected"> {{currency + ' ' + fare.Price}}
        </label>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
    props: {
        fare: { type: Object, required: true },
        flight: { type: Object, required: true },
        route: { type: Number, required: true },
        width: { type: String, default: '25%' }
    },
    data() {
        return {
            currency: window.bookSecure.settings.currency
        }
    },
    computed: {
        classes() {
            return {
                selected: this.selected
            }
        },
        selected() {
            return _.find(this.selectedFlights, { id: this.flight.Id, fareId: this.fare.Id })
        },
        ...mapGetters(
            'cart',
            [
                'selectedFlights'
            ]
        )
    },
    methods: {
        selectFlight() {
            this.$store.dispatch('cart/selectFlight', { flight: this.flight, route: this.route, fareId: this.fare.Id })
        }
    }
}
</script>

<style lang="scss" scoped>
.fare-type {
    float: left;
    padding: 20px 10px;
    border-right: $border-light;
    text-align: center;

    &:last-of-type {
        border-right: none;
    }

    @include media(">tablet") {
        height: 100%;
    }
}

.type {
    margin-bottom: 15px;
}

.price {
    font-weight: $font-weight-bold;
}

.selected {
    border: none;
    background: $color-second-lighter;
    font-weight: $font-weight-bold;
}
</style>
