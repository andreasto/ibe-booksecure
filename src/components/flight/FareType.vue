<template>
    <div class="fare-type" @click="selectFlight" :class="classes" :style="{width: width}">
        <div class="type">{{fareType.type}}</div>
        <div class="price">{{currency + ' ' + fareType.price}}</div>
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
    border-right: $border-lighter;
    text-align: center;

    &:last-of-type {
        border-right: none;
    }

    @include media(">tablet") {
        height: 100%;
    }
}
.type {
    margin-bottom: 10px;
}

.selected {
    border: none;
    background: $color-second-lighter;
    font-weight: $font-weight-bold;
}
</style>
