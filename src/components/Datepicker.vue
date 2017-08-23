// https://github.com/ankurk91/vue-flatpickr-component
// https://chmln.github.io/flatpickr/options/

<template>
    <div class="form-group datepicker" :class="classes">
        <div class="click-area">
            <i class="icon icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>
            <div class="trip-type">{{tripType}}</div>
            <div class="floating-label">{{labelText}} {{mode}}</div>
            <div class="selected-text" :class="{placeholder: (!fromDateSelected && !toDateSelected)}">{{selectedDatesText}}</div>
            <flat-pickr :config="config" :placeholder="labelText" v-model="selectedDates"></flat-pickr>
            <span v-show="showError" class="validation-message">{{ error }}</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

const dateFormat = 'YYYY-MM-DD'

export default {
    props: {
        from: { type: String, required: true },
        to: { type: String },
        mode: { type: String, default: 'single' },
        iconLeft: { type: String, default: '&#xE916;' },
        iconRight: { type: String },
        error: { type: String }
    },
    data() {
        return {
            fromDate: this.from,
            toDate: this.to,
            selectedDates: null,
            config: {
                mode: this.mode,
                disableMobile: true,
                defaultDate: (this.mode === 'range') ? [this.from, this.to] : this.from,
                onOpen: (selectedDates, dateStr, instance) => {
                    console.log('on open')
                    if (this.mode === 'range' && !this.toDate) {
                        this.clearDatePicker()
                    }
                },
                onChange: (selectedDates, dateStr, instance) => {
                    if (selectedDates.length === 1) {
                        // reset dates if two dates have already been selected, and user selects a new one
                        if (this.fromDateSelected && this.toDateSelected) {
                            this.clearDatePicker()
                        }

                        this.fromDate = moment(selectedDates[0]).format(dateFormat)
                        this.toDate = null
                        this.$emit('datepickerFromChanged', this.fromDate)
                        this.$emit('datepickerToChanged', null)
                    } else if (selectedDates.length === 2) {
                        this.fromDate = moment(selectedDates[0]).format(dateFormat)

                        if (selectedDates[0] === selectedDates[1]) {
                            console.log('dates are equal')
                            this.toDate = null
                        } else {
                            this.toDate = moment(selectedDates[1]).format(dateFormat)
                        }
                        this.$emit('datepickerFromChanged', this.fromDate)
                        this.$emit('datepickerToChanged', this.toDate)
                    }
                }
            }
        }
    },
    computed: {
        labelText() {
            return (this.mode === 'single') ? 'Select date' : 'Select dates'
        },
        showError() {
            return this.error && this.error.length > 0 && !this.fromDateSelected
        },
        fromDateSelected() {
            return this.fromDate && this.fromDate.length > 0
        },
        toDateSelected() {
            return this.toDate && this.toDate.length > 0
        },
        selectedDatesText() {
            let text = this.labelText

            if (!this.fromDate && !this.toDate) {
                return text
            }

            let fromDateMoment = moment(this.fromDate)
            let toDateMoment = moment(this.toDate)

            if ((this.fromDateSelected && !this.toDateSelected) || (this.fromDate === this.toDate)) {
                text = fromDateMoment.date() + ' ' + fromDateMoment.format('MMM')
            } else if (this.fromDateSelected && this.toDateSelected) {
                var tripIsWithinSameMonth = fromDateMoment.isSame(toDateMoment, 'year') && fromDateMoment.isSame(toDateMoment, 'month')

                if (tripIsWithinSameMonth) {
                    text = fromDateMoment.date() + ' - ' + toDateMoment.date() + ' ' + fromDateMoment.format('MMM')
                } else {
                    text = `${fromDateMoment.date()} ${fromDateMoment.format('MMM')} - ${toDateMoment.date()} ${toDateMoment.format('MMM')}`
                }
            }

            return text
        },
        tripType() {
            let tripType = ''

            if (this.mode === 'single' || (!this.fromDateSelected && !this.toDateSelected)) {
                return ''
            }

            if ((this.fromDateSelected && !this.toDateSelected) || (this.fromDate === this.toDate)) {
                tripType = 'One-way'
            } else if (this.fromDateSelected && this.toDateSelected) {
                tripType = 'Roundtrip'
            }

            return tripType
        },
        classes: function () {
            return {
                'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
                'with-icon-right': this.iconRight && this.iconRight.length > 0,
                'is-invalid': this.showError
            }
        }
    },
    methods: {
        clearDatePicker() {
            console.log('clear')
            this.$emit('datepickerFromChanged', '')
            this.$emit('datepickerToChanged', '')
            this.fromDate = ''
            this.toDate = ''
        }
    },
    components: {
        flatPickr
    }
}
</script>

<style lang="scss" scoped>
.datepicker {
    min-width: 240px;
}

input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.trip-type {
    position: absolute;
    right: 8px;
    top: 0;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: $color-second;
    z-index: $z-index-high;
}
</style>
