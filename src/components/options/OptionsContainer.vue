<template>
    <div class="options-container clearfix">
        selectedOptions: {{selectedOptions}}
        <div class="title" v-if="title">{{title}}</div>
        <div class="passengers">
            <div v-for="(passenger, index) in cartPassengers" class="passenger" @click="changePassenger(index)" :class="{selected: selectedPassengerIndex === index}">
                {{passenger.firstName + ' ' + passenger.lastName}}
            </div>
        </div>
        <div class="options">
            <div v-for="(option, index) in options" :key="option.id" class="option clearfix">
                <div class="option-title">{{option.title}}</div>
                <div class="option-price">Service Cost: {{option.price}}</div>
                <div class="option-total">Selected Service Total: {{option.price * selectedOptionsCount[index]}}</div>
                <ibe-add-subtract-buttons class="buttons" :counter="selectedOptionsCount[index]" :add-callback="() => { addExtra(option.id) }" :subtract-callback="() => { subtractExtra(option.id) }"></ibe-add-subtract-buttons>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import AddSubtractButtons from '@/components/AddSubtractButtons'

export default {
    mounted() {
        this.setOptionCounters()
    },
    props: {
        title: { type: String }
    },
    data() {
        return {
            selectedPassengerIndex: 0,
            flightId: '23443',
            selectedOptionsCount: []
        }
    },
    computed: {
        ...mapGetters(
            'cart',
            [
                'options',
                'cartPassengers',
                'selectedOptions'
            ]
        )
    },
    methods: {
        addExtra(optionId) {
            console.log('add extra')
            let selectedOption = { optionId: optionId, flightId: this.flightId, passengerIndex: this.selectedPassengerIndex }

            this.$store.commit('cart/addSelectedOption', selectedOption, { root: true })
            this.setOptionCounters()
        },
        subtractExtra(optionId) {
            console.log('subtract extra')
            let selectedOption = { optionId: optionId, flightId: this.flightId, passengerIndex: this.selectedPassengerIndex }

            this.$store.commit('cart/subtractSelectedOption', selectedOption, { root: true })
            this.setOptionCounters()
        },
        changePassenger(index) {
            this.selectedPassengerIndex = index
            this.setOptionCounters()
        },
        setOptionCounters() {
            this.selectedOptionsCount = []
            this.options.forEach((option) => {
                let currentOptionInCartCount = _.filter(this.selectedOptions, { optionId: option.id, flightId: this.flightId, passengerIndex: this.selectedPassengerIndex }).length
                this.selectedOptionsCount.push(currentOptionInCartCount)
            })
        }
    },
    components: {
        'ibe-add-subtract-buttons': AddSubtractButtons
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 20px;
    margin-bottom: 10px;
}
.passengers {
    @include media(">tablet") {
        float: left;
        width: 20%;
    }
}

.passenger {
    padding: 10px;
    border-bottom: $border-light;
    cursor: pointer;

    &.selected {
        background: $color-third;
    }
}

.options {
    @include media(">tablet") {
        float: left;
        width: 80%;
    }
}
.option {
    position: relative;
    padding: 10px;
}

.option-title,
.option-price,
.option-total {

}
.buttons {
    position: absolute;
    right: 0;
    top: 0;
}
</style>
