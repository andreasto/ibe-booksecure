<template>
    <div class="segment-summary">
        <div class="date">{{flight.departureDate}}</div>
        <div class="departure">{{flight.departure}}</div>
        <div class="arrival">{{flight.arrival}}</div>
        <div class="duration">{{flight.duration}}</div>
        <div class="stops">{{flight.stops}}</div>
        <div class="flight-number">{{flight.flightNumber}}</div>
    </div>
</template>

<script>
export default {
    props: {
        flight: { type: Object, required: true }
    },
    data: () => ({
        showLoader: false
    }),
    methods: {

    }
}
</script>

<style lang="scss">
.segment-summary {
    border: $border-light;
}
</style>
