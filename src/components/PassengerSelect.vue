<template>
    <div class="form-group passenger-select" :class="classes" v-click-outside="closeDropDown">
        <div class="click-area" @click="toggleDropDown">
            <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
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
                <li>
                    <span class="counter">{{passengers.children}}</span>
                    Children
                    <div class="passenger-description">2-14 years</div>
                    <div class="buttons">
                        <button @click="changePassengers('decrementChildren')">-</button>
                        <button @click="changePassengers('incrementChildren')">+</button>
                    </div>
                </li>
                <li>
                    <span class="counter">{{passengers.infants}}</span>
                    Infants
                    <div class="passenger-description">Under 2 years</div>
                    <div class="buttons">
                        <button @click="changePassengers('decrementInfants')">-</button>
                        <button @click="changePassengers('incrementInfants')">+</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        iconLeft: { type: String, default: 'people' },
        iconRight: { type: String },
        error: { type: String }
    },
    data() {
        return {
            hideErrorMessage: false,
            showDropDown: false
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
            if ((this.passengers.adults === 0 && mutation === 'decrementAdults') ||
                (this.passengers.children === 0 && mutation === 'decrementChildren') ||
                (this.passengers.infants === 0 && mutation === 'decrementInfants')) {
                return
            }

            // todo: implement limitations for number of travelers

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
    color: rgba(0,0,0,.4);
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
</style>
