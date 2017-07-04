<template>
    <div class="flight" @click="selectFlight" :class="classes">
        {{flight}}
        <p>Click to select</p>
    </div>
</template>

<script>
//import { mapActions } from 'vuex'

export default {
    props: {
        flight: { type: Object, required: true },
        leg: { type: Number, required: true }
    },
    data: () => ({
        selectedFlight: null
    }),
    computed: {
        classes: function () {
            return {
                selected: this.flight.selected
            }
        }
    },
    methods: {
        selectFlight() {
            console.log('select flight')
            this.$store.dispatch('cart/selectFlight', { flight: this.flight, leg: this.leg })
        }
    }
}
</script>

<style lang="scss" scoped>
.flight {
    border: 1px solid;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
}

.selected {
    background: $color-third;
}
</style>
