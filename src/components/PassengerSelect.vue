<template>
    <div class="form-group passenger-select" :class="classes" v-click-outside="closeDropDown">
        <div class="click-area" @click="toggleDropDown">
            <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
            <div class="floating-label">Select passengers</div>
            <div class="selected-text">{{passengerSelectText}}</div>
            <span v-show="showError" class="validation-message">{{ error }}</span>

            <ul class="dropdown-list" v-show="showDropDown" @click.stop="() => {}">
                <li>
                    Adults
                    <div class="buttons">
                        <button @click="changePassengers('decrementAdults')">-</button>
                        <span class="counter">{{passengers.adults}}</span>
                        <button @click="changePassengers('incrementAdults')">+</button>
                    </div>
                </li>
                <li>
                    Children
                    <div class="buttons">
                        <button @click="changePassengers('decrementChildren')">-</button>
                        <span class="counter">{{passengers.children}}</span>
                        <button @click="changePassengers('incrementChildren')">+</button>
                    </div>
                </li>
                <li>
                    Infants
                    <div class="buttons">
                        <button @click="changePassengers('decrementInfants')">-</button>
                        <span class="counter">{{passengers.infants}}</span>
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

        &:hover {
            background-color: white;
        }
    }
}

.counter {
    display: inline-block;
    font-size: 18px;
    margin: 0 4px;
}

.buttons {
    float: right;
    position: relative;
    top: -4px;

    button {
        $size: 38px;

        background: white;
        border: 3px solid $color-primary;
        border-radius: 50%;
        width: $size;
        height: $size;
        font-size: 26px;
        cursor: pointer;
    }
}
</style>
