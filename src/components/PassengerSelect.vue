<template>
    <div class="form-group passenger-select" :class="classes" v-click-outside="closeDropDown">
        <div class="click-area" @click="toggleDropDown">
            <i class="icon icon-left material-icons" v-show="iconLeft" v-html="iconLeft"></i>
            <i class="icon icon-right material-icons" v-show="iconRight" v-html="iconRight"></i>
            <i class="icon icon-close material-icons" v-show="showDropDown">&#xE5CD;</i>

            <div class="floating-label">Select passengers</div>
            <div class="selected-text">{{passengerSelectText}}</div>
            <span v-show="showError" class="validation-message">{{ error }}</span>

            <ul class="dropdown-list" v-show="showDropDown" @click.stop="() => {}">
                <li>
                    <span class="counter">{{passengers.adults}}</span>
                    Adults
                    <div class="buttons">
                        <button @click="changePassengers('decrementAdults')">-</button>
                        <button @click="changePassengers('incrementAdults')">+</button>
                    </div>
                </li>
                <li v-if="allowChildren">
                    <span class="counter">{{passengers.children}}</span>
                    Children
                    <div class="passenger-description">2-14 years</div>
                    <div class="buttons">
                        <button @click="changePassengers('decrementChildren')">-</button>
                        <button @click="changePassengers('incrementChildren')">+</button>
                    </div>
                </li>
                <li v-if="allowChildren">
                    <span class="counter">{{passengers.infants}}</span>
                    Infants
                    <div class="passenger-description">Under 2 years</div>
                    <div class="buttons">
                        <button @click="changePassengers('decrementInfants')">-</button>
                        <button @click="changePassengers('incrementInfants')">+</button>
                    </div>
                </li>
                <li v-if="errorMessages.length > 0">
                    <div v-for="errorMessage in errorMessages" class="error-message">{{errorMessage}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        iconLeft: { type: String, default: '&#xE7FB;' },
        iconRight: { type: String, default: '&#xE313;' },
        error: { type: String }
    },
    data() {
        return {
            hideErrorMessage: false,
            showDropDown: false,
            allowChildren: window.bookSecure.settings.allowChildren,
            maxNumberOfAdults: window.bookSecure.settings.maxNumberOfAdults,
            maxNumberOfChildren: window.bookSecure.settings.maxNumberOfChildren,
            maxNumberOfInfantsPerAdult: window.bookSecure.settings.maxNumberOfInfantsPerAdult,
            errorMessages: []
        }
    },
    computed: {
        showError() {
            return this.error && this.error.length > 0 && !this.hideErrorMessage
        },
        classes() {
            return {
                'dropdown-open': this.showDropDown,
                'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
                'with-icon-right': this.iconRight && this.iconRight.length > 0,
                'is-invalid': this.showError
            }
        },
        ...mapGetters(
            'search',
            [
                'passengerSelectText',
                'passengers',
                'totalPassengers'
            ])
    },
    methods: {
        toggleDropDown() {
            this.showDropDown = !this.showDropDown
        },
        closeDropDown() {
            this.showDropDown = false
        },
        changePassengers(mutation) {
            this.errorMessages = []

            if ((this.passengers.adults === 0 && mutation === 'decrementAdults') ||
                (this.passengers.children === 0 && mutation === 'decrementChildren') ||
                (this.passengers.infants === 0 && mutation === 'decrementInfants')) {
                return
            }

            if (this.maxNumberOfAdults && this.passengers.adults >= this.maxNumberOfAdults && mutation === 'incrementAdults') {
                this.errorMessages.push(`Max ${this.maxNumberOfAdults} adults allowed`)
            }
            if (this.maxNumberOfChildren && this.passengers.children >= this.maxNumberOfChildren && mutation === 'incrementChildren') {
                this.errorMessages.push(`Max ${this.maxNumberOfChildren} children allowed`)
            }
            if (this.maxNumberOfInfantsPerAdult && this.passengers.infants >= (this.passengers.adults * this.maxNumberOfInfantsPerAdult) && mutation === 'incrementInfants') {
                this.errorMessages.push(`Max ${this.maxNumberOfInfantsPerAdult} infants per adult allowed`)
            }

            if (this.errorMessages.length > 0) {
                return
            }
            this.$store.commit('search/' + mutation)
            this.hideErrorMessage = this.totalPassengers > 0
        }
    }
}
</script>

<style lang="scss" scoped>
.passenger-select {
    position: relative;
}

.dropdown-list {
    li {
        cursor: default;
        padding: 15px 10px;
        border-bottom: $border-light;
        position: relative;

        &:hover {
            background-color: white;
        }
    }
}

.counter {
    position: relative;
    top: 0;
    display: inline-block;
    font-size: 22px;
    margin: 0 4px 0 0;
    color: $color-primary;
    font-weight: $font-weight-bold;
}

.passenger-description {
    color: rgba(0, 0, 0, .4);
    font-size: 11px;
    line-height: 12px;
}

.buttons {
    position: absolute;
    top: 12px;
    right: 10px;

    button {
        $size: 38px;

        background: white;
        border: 1px solid $color-primary;
        border-radius: 50%;
        width: $size;
        height: $size;
        font-size: 26px;
        cursor: pointer;
    }
}
.error-message {
    font-size: 13px;
}
</style>
