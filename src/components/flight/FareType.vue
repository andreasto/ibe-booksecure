<template>
    <div class="fare-type" @click="selectFlight" :class="classes" :style="{width: width}">
        <div class="type">{{fareType.type}}</div>
        <label class="radio-button price">
            <input type="radio" :checked="fareType.selected"> {{currency + ' ' + fareType.price}}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        fareType: { type: Object, required: true },
        flight: { type: Object, required: true },
        leg: { type: Number, required: true },
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
                selected: this.fareType.selected
            }
        }
    },
    methods: {
        selectFlight() {
            console.log('select flight')
            this.$store.dispatch('cart/selectFlight', { flight: this.flight, leg: this.leg, fareType: this.fareType })
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
