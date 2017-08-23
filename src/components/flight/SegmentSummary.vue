<template>
    <div class="segment-summary">
        <ibe-flight-date :date="flight.DepartureDateTime"></ibe-flight-date>

        <div class="time">{{departureTime}}</div>
        <div class="time right">{{arrivalTime}}</div>
        <div class="clearfix"></div>

        <div class="location">{{flight.From.Name}}
            <span class="airport-code">({{flight.From.Code}})</span>
        </div>
        <div class="location right">{{flight.To.Name}}
            <span class="airport-code">({{flight.To.Name}})</span>
        </div>
        <div class="clearfix"></div>

        <div class="duration">
            Duration:<br>{{duration}}</div>
        <div class="stop-overs">
            Stops:<br>{{stops}}</div>
        <div class="flight-number right">
            Flight number:<br>{{flight.FlightNumber}}</div>
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
            return moment(this.flight.DepartureDateTime).format('HH:mm')
        },
        arrivalTime() {
            return moment(this.flight.ArrivalDateTime).format('HH:mm')
        },
        duration() {
            let hours = Math.floor(this.flight.FlightTime / 60)
            let minutes = this.flight.FlightTime % 60

            return hours + ':' + minutes
        },
        stops() {
            return this.flight.Legs.length > 1 ? this.flight.Legs.length : 'Direct'
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

    .time {
        float: left;
        width: 50%;
        font-size: 20px;
        margin-bottom: 5px;
    }

    .location {
        float: left;
        width: 50%;
        margin-bottom: 10px;
    }

    .duration,
    .stop-overs,
    .flight-number {
        float: left;
        width: 33.33%;
    }

    .stop-overs {
        text-align: center;
    }
}
</style>
