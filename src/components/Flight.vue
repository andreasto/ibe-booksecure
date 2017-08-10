<template>
    <div class="flight" @click="selectFlight" :class="classes">
        <ibe-segment-summary :flight="flight"></ibe-segment-summary>
        <p>Click to select</p>
    </div>
</template>

<script>
//import { mapActions } from 'vuex'
import SegmentSummary from '@/components/SegmentSummary'

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
    },
    components: {
        'ibe-segment-summary': SegmentSummary
    }
}
</script>

<style lang="scss" scoped>
.flight {
    background: white;
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
