<template>
    <div class="segment-summary">
        <ibe-flight-date :date="flight.departureDate"></ibe-flight-date>

        <div class="segment-summary__date">{{departureTime}}</div>
        <div class="segment-summary__date right">{{arrivalTime}}</div>
        <div class="clearfix"></div>

        <div class="segment-summary__location">{{flight.departureName}}
            <span class="segment-summary__airport-code">({{flight.departure}})</span>
        </div>
        <div class="segment-summary__location right">{{flight.arrivalName}}
            <span class="segment-summary__airport-code">({{flight.arrival}})</span>
        </div>
        <div class="clearfix"></div>

        <div class="segment-summary__time">{{flight.departureTime}}</div>
        <div class="segment-summary__time right">{{flight.arrivalTime}}</div>
        <div class="clearfix"></div>

        <div class="segment-summary__duration">
            Duration:
            <br>{{flight.duration}}</div>
        <div class="segment-summary__stop-overs">
            Stops:
            <br>{{flight.stops}}</div>
        <div class="segment-summary__flight-number right">
            Flight number:
            <br>{{flight.flightNumber}}</div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
import moment from 'moment'
import FlightDate from '@/components/flight/FlightDate'

export default {
    props: {
        flight: { type: Object, required: true }
    },
    computed: {
        departureTime() {
            return moment(this.flight.departureDate).format('HH:mm')
        },
        arrivalTime() {
            return moment(this.flight.departureDate).format('HH:mm')
        }
    },
    components: {
        'ibe-flight-date': FlightDate
    }
}
</script>

<style lang="scss" scoped>
.segment-summary {
    color: black;
    font-size: 14px;
    font-weight: lighter;
    position: relative;
    padding: 10px;
    height: 100%;
    border-bottom: $border-lighter;
    padding-left: 110px;

    @include media(">tablet") {
        border-bottom: none;
    }

    .right {
        text-align: right;
        float: right;
    }

    &__date {
        float: left;
        width: 50%;
        font-size: 20px;
        margin-bottom: 5px;
    }

    &__location {
        float: left;
        width: 50%;
        margin-bottom: 6px;
    }

    &__time {
        font-size: 1.3em;
        font-weight: bold;
        float: left;
        width: 20%;
        margin-bottom: 6px;
    }

    &__time-divider {
        position: relative;
        float: left;
        width: 60%;
        height: 1px;
        border-bottom: $border-light;
        margin-top: 12px;
    }

    &__seats-left {
        $seatsLeftWidth: 110px;

        position: absolute;
        width: $seatsLeftWidth;
        top: -12px;
        left: 50%;
        margin-left: -($seatsLeftWidth/2);
        text-align: center;
        background-color: $color-error;
        color: black;
        border-radius: 3px;
        padding: 2px;
        font-size: 0.9em;
        text-transform: uppercase;
        font-weight: 500;
    }

    &__duration,
    &__stop-overs,
    &__flight-number {
        float: left;
        width: 33.33%;
    }

    &__stop-overs {
        text-align: center;
    }
}
</style>
