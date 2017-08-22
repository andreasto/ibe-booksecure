<template>
    <div class="flight-date">
        <div class="day-name">{{formattedDate.dayName}}</div>
        <div class="day">{{formattedDate.day}}</div>
        <div class="month-name">{{formattedDate.monthName}}</div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        date: { type: String }
    },
    computed: {
        formattedDate() {
            return {
                dayName: moment(this.date).format('dddd'),
                day: moment(this.date).format('D'),
                monthName: moment(this.date).format('MMM')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.flight-date {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    color: $color-primary-dark;
    text-align: center;
    font-size: 14px;
    background: rgba(0, 0, 0, .04);
    padding: 20px 0 0;
    border-right: $border-lighter;

    .day-name {
        font-size: 13px;
        margin-bottom: 5px;
    }
    .day {
        font-size: 30px;
        margin-bottom: 5px;
        font-weight: $font-weight-bold;
    }
}
</style>
