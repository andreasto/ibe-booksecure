<template>
    <div class="clearfix">

        <div class="criteria-container clearfix" v-show="!hideSearchForm" :class="{multicity: isMultiCity}">
            <ibe-search-type-switch></ibe-search-type-switch>

            <div class="criteria-row clearfix" v-for="(row, index) in criteria">
                <h3 class="multicity-header" v-show="isMultiCity">Flight {{index + 1}}</h3>
                <ibe-destination-select :departures="airports" :destinations="airports" :departure="row.departure" :arrival="row.arrival" :error="validationErrors.length > index ? validationErrors[index].destinationSelect : ''" :label="'Destination'" :iconLeft="'location_on'" :placeholder="'Select departure & destination'" :tabindex="1" @departureChanged="row.departure = $event" @arrivalChanged="row.arrival = $event"></ibe-destination-select>
                <ibe-datepicker :mode="(isMultiCity ? 'single' : 'range')" :from="row.departureDate" :to="row.arrivalDate" :error="validationErrors.length > index ? validationErrors[index].dates : ''" :iconLeft="'date_range'" @datepickerFromChanged="row.departureDate = $event" @datepickerToChanged="row.arrivalDate = $event"></ibe-datepicker>
            </div>

            <ibe-button :action="addFlightLeg" :text="'Add flight leg'" :class="'add-leg-button'" v-show="isMultiCity"></ibe-button>

            <ibe-passenger-select :error="validationErrors.length > 0 ? validationErrors[0].passengers : ''"></ibe-passenger-select>

            <div class="form-group buttons">
                <ibe-button :text="searchButtonText" :action="search" :class="'button-search'" class="search-button"></ibe-button>
            </div>
        </div>

        <!--<ibe-login-form></ibe-login-form>-->
        <ibe-loader :text="'Loading...'" v-show="showLoader"></ibe-loader>

        <code>
            <h4>Criteria</h4>
            {{criteria}}
        </code>

    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import LoginForm from '@/components/LoginForm'
import DestinationSelect from '@/components/DestinationSelect'
import SearchTypeSwitch from '@/components/SearchTypeSwitch'

export default {
    created() {
        this.$store.commit('search/showSearchForm')
    },
    components: {
        'ibe-login-form': LoginForm,
        'ibe-destination-select': DestinationSelect,
        'ibe-search-type-switch': SearchTypeSwitch
    },
    computed: {
        isMultiCity() {
            return this.criteria.length > 1 && this.searchType === 'multiCity'
        },
        ...mapGetters(
            'search',
            [
                'criteria',
                'searchType',
                'searchButtonText',
                'airports',
                'passengers',
                'totalPassengers',
                'showLoader',
                'hideSearchForm'
            ]
        )
    },
    methods: {
        ...mapActions(
            'search',
            [
                'searchFlights'
            ]
        ),
        ...mapMutations(
            'search',
            [
                'addFlightLeg',
                'changeSearchType',
                'removeMultiCity'
            ]
        ),
        search() {
            if (!this.validateCriteria()) {
                return
            }

            this.searchFlights()
        },
        validateCriteria() {
            let isValid = true
            this.validationErrors = []
            this.criteria.forEach((c) => {
                let errors = {}
                let destinationsInvalid = !c.departure || c.departure.length === 0 || !c.arrival || c.arrival.length === 0
                let datesInvalid = !c.departureDate || c.departureDate.length === 0
                let passengersInvalid = this.totalPassengers < 1

                if (destinationsInvalid) {
                    isValid = false
                    errors.destinationSelect = 'Select both departure and destination'
                }
                if (datesInvalid) {
                    isValid = false
                    errors.dates = 'Select date(s)'
                }
                if (passengersInvalid) {
                    isValid = false
                    errors.passengers = 'Select passengers'
                }
                this.validationErrors.push(errors)
            })
            return isValid
        }
    },
    data() {
        return {
            searchTypeData: this.$store.state.search.searchType,
            validationErrors: []
        }
    },
    watch: {
        searchTypeData(val, oldVal) {
            if (val === 'single') {
                this.removeMultiCity()
            } else {
                this.addFlightLeg()
            }
            this.changeSearchType(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.criteria-container {
    margin: 0 -5px;
}

.add-leg-button {
    display: block;
    float: left;
}

@include media(">tablet") {
    .destination-select,
    .dropdown,
    .passenger-select,
    .datepicker,
    .search-button,
    .criteria-row,
    .buttons,
    .multicity-header {
        float: left;
    }

    .criteria-row {
        width: 65%;

        .destination-select {
            width: 50%;
        }
        .datepicker {
            width: 50%;
        }
    }
    .passenger-select {
        width: 23%;
    }
    .buttons {
        width: 12%;
    }
    .multicity-header {
        margin-top: 14px;
    }
}

.multicity {
    .criteria-row {
        float: none;
    }
}

.multicity {
    .criteria-row {
        margin-bottom: 10px;

        @include media(">tablet") {
            float: none;
            width: 100%;
        }
    }
}
</style>
