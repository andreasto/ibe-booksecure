<template>
    <div class="clearfix">

        <div class="criteria-container clearfix" v-show="!hideSearchForm" :class="{multicity: isMultiCity}">
            <ibe-search-type-switch v-if="enableMultiCity"></ibe-search-type-switch>

            <div class="criteria-row clearfix" v-for="(route, index) in shownRoutes">
                <h3 class="multicity-header" v-show="isMultiCity">Flight {{index + 1}}</h3>
                <ibe-destination-select :airports="airports" :departure="route.fromAirport" :arrival="route.toAirport" :error="validationErrors.length > index ? validationErrors[index].destinationSelect : ''" :label="'Destination'" :placeholder="'Select departure & destination'" :tabindex="1" @departureChanged="route.fromAirport = $event" @arrivalChanged="route.toAirport = $event"></ibe-destination-select>
                <ibe-datepicker v-if="searchType === 'oneWay' || isMultiCity" :mode="'single'" :from="route.date" :error="validationErrors.length > index ? validationErrors[index].dates : ''" :class="{'with-delete-icon': index > 1}" @datepickerFromChanged="route.date = $event"></ibe-datepicker>
                <ibe-datepicker v-if="searchType === 'roundTrip'" :mode="'range'" :from="route.date" :to="route.arrivalDate" :error="validationErrors.length > index ? validationErrors[index].dates : ''" :class="{'with-delete-icon': index > 1}" @datepickerFromChanged="route.date = $event" @datepickerToChanged="route.arrivalDate = $event"></ibe-datepicker>
                <i class="material-icons delete-icon" v-if="isMultiCity && index > 1" @click="removeRoute(index)">&#xE872;</i>
            </div>

            <ibe-button :text="'Add flight leg'" :action="addRoute" :cssClass="'button add-leg-button'" :iconLeft="'&#xE145;'" v-show="isMultiCity"></ibe-button>

            <div class="passenger-and-button">
                <ibe-passenger-select :error="validationErrors.length > 0 ? validationErrors[0].passengers : ''"></ibe-passenger-select>
                <ibe-button :text="searchButtonText" :action="search" :cssClass="'button-search'"></ibe-button>
            </div>

            <div class="promo-code" v-if="enablePromoCode">
                <ibe-input v-model="promoCode" :name="'criteria-promo'" :label="'Promo code'" :placeholder="'Enter promo code here'" :icon-left="'&#xE8F6;'"></ibe-input>
            </div>
        </div>

        <!--<ibe-login-form></ibe-login-form>-->
        <ibe-loader :text="'Loading...'" v-show="showLoader"></ibe-loader>

        <code>
            <h4>Routes</h4>
            {{routes}}
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
    data() {
        return {
            searchTypeData: this.$store.state.search.searchType,
            validationErrors: [],
            maxFlightLegs: window.bookSecure.settings.maxFlightLegs,
            enablePromoCode: window.bookSecure.settings.enablePromoCode,
            enableMultiCity: window.bookSecure.settings.enableMultiCity
        }
    },
    computed: {
        shownRoutes() {
            return (this.searchType === 'multiCity') ? this.routes : [this.routes[0]]
        },
        isMultiCity() {
            return this.searchType === 'multiCity'
        },
        ...mapGetters(
            'search',
            [
                'criteria',
                'routes',
                'searchType',
                'searchButtonText',
                'airports',
                'passengers',
                'totalPassengers',
                'showLoader',
                'hideSearchForm'
            ]
        ),
        promoCode: {
            get() { return this.$store.getters['search/promoCode'] },
            set(value) { this.$store.commit('search/addPromoCode', value, {root: true}) }
        }
    },
    methods: {
        ...mapActions(
            'search',
            [
                'searchFlightsMocked'
            ]
        ),
        ...mapMutations(
            'search',
            [
                'removeRoute',
                'changeSearchType',
                'removeMultiCity'
            ]
        ),
        search() {
            if (!this.validateCriteria()) {
                return
            }

            this.searchFlightsMocked()
        },
        validateCriteria() {
            let isValid = true
            this.validationErrors = []
            this.routes.forEach((route) => {
                let errors = {}
                let destinationsInvalid = !route.fromAirport || route.fromAirport.length === 0 || !route.toAirport || route.toAirport.length === 0
                let datesInvalid = !route.date || route.date.length === 0
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
        },
        addRoute() {
            if (this.routes.length >= this.maxFlightLegs) {
                return
            }
            this.$store.commit('search/addRoute', null, { root: true })
        }
    },
    watch: {
        searchTypeData(val, oldVal) {
            if (val === 'multiCity') {
                this.addRoute()
            } else {
                this.removeMultiCity()
            }
            this.changeSearchType(val)
        }
    },
    components: {
        'ibe-login-form': LoginForm,
        'ibe-destination-select': DestinationSelect,
        'ibe-search-type-switch': SearchTypeSwitch
    }
}
</script>

<style lang="scss" scoped>
.criteria-container {
    margin: 0 -5px;

    /deep/ .button-search {
        float: right;
    }
}


@include media(">=tablet") {
    .destination-select,
    .datepicker,
    .passenger-select,
    .button-container {
        float: left;
    }

    .promo-code {
        clear: both;
        max-width: 220px;
    }

    .destination-select {
        width: 50%;
    }
    .datepicker {
        width: 50%;
    }
    .passenger-and-button {
        position: relative;
    }
    .passenger-select {
        width: 65%;
    }
    .button-container {
        width: 35%;

        /deep/ .button-search {
            width: 100%;
            display: block;
        }
    }
}

@include media(">=desktop") {
    .criteria-row,
    .passenger-and-button {
        float: left;
    }

    .criteria-row {
        width: 65%;
    }

    .passenger-and-button {
        width: 35%;
    }
}

.multicity {

    .criteria-row {
        position: relative;
        float: none;
        margin-bottom: 20px;

        @include media(">=tablet") {
            float: none;
            width: 100%;
            margin-bottom: 0;
            margin-right: 40px;
        }
    }

    @include media(">=tablet") {
        .multicity-header {
            position: absolute;
            left: 0;
            top: 15px;
        }
        .destination-select {
            width: 50%;
            padding-left: 80px;
        }
        .datepicker {
            width: 50%;
        }

        .passenger-and-button {
            float: right;
            width: 50%;
        }
    }
    .with-delete-icon {
        padding-right: 50px;
    }

    /deep/ .add-leg-button {
        margin-top: -10px;
        border: 1px dotted $color-primary;
        background: $color-background;
        color: $color-text;

        i {
            position: absolute;
            left: 4px;
            top: 11px;
        }

        @include media(">=tablet") {
            display: block;
            float: left;
            margin: 0;
            margin-left: 75px;
        }
    }
}

.delete-icon {
    position: absolute;
    right: 0;
    top: 94px;
    font-size: 38px;
    color: $color-primary;
    cursor: pointer;

    @include media(">=tablet") {
        top: 6px;
    }
}
</style>
