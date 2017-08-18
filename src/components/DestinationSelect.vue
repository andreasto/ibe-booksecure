<template>
    <div class="form-group destination-select" :class="classes" v-click-outside="closeDropDown">
        <div class="click-area" @click="toggleDropDown">
            <i class="icon icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>
            <i class="icon icon-right material-icons" v-show="iconRight" v-html="iconRight"></i>
            <i class="icon icon-close material-icons" v-show="showDropDown">&#xE5CD;</i>
            <div class="floating-label">{{label}}</div>
            <input type="text" :value="selectedText" :placeholder="placeholder" class="selected-text-input" readonly>
            <span v-show="showError" class="validation-message">{{ error }}</span>

            <div class="destination-panel dropdown-list" v-show="showDropDown" @click.stop="() => {}">
                <div class="departures">
                    <h3>Select departure:</h3>
                    <div v-for="(item, index) in departures" @click="selectDeparture(item)" :class="{selected: item.code === departure}" class="destination">
                        {{ item.name }}
                        <span class="code">({{item.code}})</span>
                    </div>
                </div>
                <transition name="fade">
                    <div class="destinations" v-show="hasSelectedDeparture">
                        <h3>Select destination:</h3>
                        <div v-if="!hasDestinations" class="no-destinations">No destinations available</div>
                        <div v-if="hasDestinations" v-for="(item, index) in destinations" @click="selectDestination(item)" :class="{selected: item.code === arrival}" class="destination">
                            {{ item.name }}
                            <span class="code">({{item.code}})</span>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    mounted() {
        if (this.departure && this.departures.length > 0) {
            this.selectedDepartureName = this.departures.find((d) => d.code === this.departure).name
        }
        if (this.arrival && this.destinations.length > 0) {
            this.selectedArrivalName = this.destinations.find((d) => d.code === this.arrival).name
        }
    },
    props: {
        label: { type: String },
        placeholder: { type: String },
        departure: { type: String },
        arrival: { type: String },
        airports: { type: Array, required: true },
        iconLeft: { type: String, default: '&#xE0C8;' },
        iconRight: { type: String, default: '&#xE313;' },
        tabindex: { type: Number, default: -1 },
        error: { type: String }
    },
    data() {
        return {
            hideErrorMessage: false,
            hasSelectedDeparture: this.departure,
            showDropDown: false,
            selectedIndex: 0,
            selectedDepartureName: '',
            selectedArrivalName: ''
        }
    },
    computed: {
        showError() {
            return this.error && this.error.length > 0 && !this.hideErrorMessage && !this.departureAndDestinationSelected
        },
        selectedText() {
            let text = ''

            if (this.departure) {
                text = this.selectedDepartureName
            }
            if (this.departure && this.arrival) {
                text = this.selectedDepartureName + ' - ' + this.selectedArrivalName
            }
            return text
        },
        departureAndDestinationSelected() {
            return this.departure && this.departure.length > 0 && this.arrival && this.arrival.length > 0
        },
        classes() {
            return {
                'dropdown-open': this.showDropDown,
                'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
                'with-icon-right': this.iconRight && this.iconRight.length > 0,
                'is-invalid': this.showError
            }
        },
        departures() {
            let airportsWithAvailableDestinations = this.airports.filter((airport) => airport.availableDestinations.length > 0)
            return airportsWithAvailableDestinations
        },
        destinations() {
            let availableDestinations = []
            let selectedDeparture = _.find(this.departures, { code: this.departure })

            if (!selectedDeparture) {
                return []
            }
            selectedDeparture.availableDestinations.forEach((id) => {
                let airport = _.find(this.airports, { id: id })
                if (airport) {
                    availableDestinations.push(airport)
                }
            })
            return availableDestinations
        },
        hasDestinations() {
            return this.destinations.length > 0
        }
    },
    methods: {
        closeDropDown() {
            this.hideErrorMessage = false
            this.showDropDown = false
        },
        toggleDropDown() {
            this.hideErrorMessage = false
            this.showDropDown = !this.showDropDown
        },
        selectDeparture(item) {
            this.hideErrorMessage = true
            this.selectedDepartureName = item.name
            this.hasSelectedDeparture = true

            this.$emit('departureChanged', item.code)
        },
        selectDestination(item) {
            this.hideErrorMessage = true
            this.selectedArrivalName = item.name
            this.showDropDown = false

            this.$emit('arrivalChanged', item.code)
        }
    }
}
</script>

<style lang="scss" scoped>
.destination-panel {
    border: $border-light;

    @include media(">tablet") {
        width: 500px;
    }
}

.departures,
.destinations {
    overflow-y: auto;
    max-height: 500px;

    @include media(">tablet") {
        float: left;
        width: 50%;
    }

    h3 {
        padding: 4px 10px 0;
        color: $color-primary;
        font-weight: $font-weight-light;
        text-transform: uppercase;
        font-size: 16px;
    }
}

.destinations {
    border-top: $border-light;

    @include media(">tablet") {
        border-top: none;
        border-left: $border-light;
    }
}

.destination {
    padding: 6px 10px;

    &:hover {
        background: $color-hover;
    }
}

.code {
    display: inline-block;
    color: rgba(0, 0, 0, .3);
    margin-left: 6px;
}
.no-destinations {
    font-style: italic;
    padding-left: 10px;
}

.selected {
    border-top: $border-light;
    border-bottom: $border-light;
    background: $color-third;
}
</style>
