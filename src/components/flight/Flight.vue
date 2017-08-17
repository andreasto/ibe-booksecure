<template>
    <div class="flight clearfix" :class="classes">
        <ibe-segment-summary :flight="flight" class="segment-summary"></ibe-segment-summary>
        <div class="fare-types">
            <ibe-fare-type v-for="fareType in flight.fareTypes" :key="fareType.id" :flight="flight" :fare-type="fareType" :leg="leg" :width="fareTypeWidth"></ibe-fare-type>
        </div>
    </div>
</template>

<script>
import SegmentSummary from '@/components/flight/SegmentSummary'
import FareType from '@/components/flight/FareType'

export default {
    props: {
        flight: { type: Object, required: true },
        leg: { type: Number, required: true }
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
        fareTypeWidth() {
            return 100 / this.flight.fareTypes.length + '%'
        }
    },
    components: {
        'ibe-segment-summary': SegmentSummary,
        'ibe-fare-type': FareType
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

.selected {
    //border: 2px solid $color-second;
}

.segment-summary {

    @include media(">tablet") {
        float: left;
        width: 50%;
        border-right: $border-light;
    }
}

.fare-types {
    height: 100%;

    @include media(">tablet") {
        float: left;
        width: 50%;
    }
}
</style>
