<template>
    <div class="flight clearfix" :class="classes">
        <ibe-segment-summary :flight="flight" class="segment-summary"></ibe-segment-summary>
        <div class="fares">
            <ibe-fare v-for="fare in flight.Fares" :key="fare.Id" :flight="flight" :fare="fare" :route="route" :width="fareWidth"></ibe-fare>
        </div>
    </div>
</template>

<script>
import SegmentSummary from '@/components/flight/SegmentSummary'
import Fare from '@/components/flight/Fare'

export default {
    props: {
        flight: { type: Object, required: true },
        route: { type: Number, required: true }
    },
    data() {
        return {
            selectedFlight: null
        }
    },
    computed: {
        classes() {
            return {
                selected: this.flight.selected
            }
        },
        fareWidth() {
            return 100 / this.flight.Fares.length + '%'
        }
    },
    components: {
        'ibe-segment-summary': SegmentSummary,
        'ibe-fare': Fare
    }
}
</script>

<style lang="scss" scoped>
.flight {
    position: relative;
    background: white;
    border: $border-light;
    margin-bottom: 10px;
    width: 100%;
    cursor: pointer;
    overflow: hidden;

    @include media(">tablet") {
        height: $flight-height;
    }
}

.segment-summary {
    @include media(">tablet") {
        float: left;
        width: 50%;
        border-right: $border-light;
    }
}

.fares {
    height: 100%;

    @include media(">tablet") {
        float: left;
        width: 50%;
    }
}
</style>
