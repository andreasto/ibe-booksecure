<template>
    <div class="passenger">
        <div class="title">
            Passenger {{index}}
            <span class="passenger-type" v-if="passenger.type !== passengerTypes.adult">({{passenger.type}})</span>
        </div>
        <div class="passenger-info" v-if="passenger.type === passengerTypes.infant && infantInformation">{{infantInformation}}</div>
        <div class="form-elements clearfix">
            <ibe-dropdown v-model="passenger.title" :id="idPrefix + '-title'" :name="idPrefix + '-title'" :items="items" :validation="'required'" :label="'Title'" :placeholder="'Select title'" :min-width="'150px'"></ibe-dropdown>
            <ibe-input v-model="passenger.firstName" :id="idPrefix + '-first-name'" :name="idPrefix + '-first-name'" :label="'First name'" :placeholder="'As given in passport/photo ID'" :validation="'required'"></ibe-input>
            <ibe-input v-model="passenger.lastName" :id="idPrefix + '-last-name'" :name="idPrefix + '-last-name'" :label="'Last name'" :placeholder="'As given in passport/photo ID'" :validation="'required'"></ibe-input>
            <ibe-date-of-birth-selector v-model="passenger.dateOfBirth" :name="idPrefix + '-dob'" :label="'Date of birth'" :required="true"></ibe-date-of-birth-selector>
        </div>
        <div class="contact-information" v-if="(index === 1 && enableContactInfoPrimaryPassenger) || enableContactInfoAllPassengers">
            <ibe-contact-information :contact-info="passenger.contactInformation" :index="index"></ibe-contact-information>
        </div>
        <div class="address-information" v-if="(index === 1 && enableAddressInfoPrimaryPassenger) || enableAddressInfoAllPassengers">
            <ibe-address-information :address-info="passenger.addressInformation" :index="index"></ibe-address-information>
        </div>
        <div class="advance-passenger-information" v-if="enableAdvancePassengerInformation">
            <ibe-advance-passenger-information :passenger="passenger" :index="index"></ibe-advance-passenger-information>
        </div>
        {{passenger}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { passengerTypes } from '@/core/constants'
import DateOfBirthSelector from '@/components/DateOfBirthSelector'
import ContactInformation from '@/components/ContactInformation'
import AddressInformation from '@/components/AddressInformation'
import AdvancePassengerInformation from '@/components/AdvancePassengerInformation'

export default {
    props: {
        passenger: { type: Object, required: true },
        index: { type: Number, required: true }
    },
    components: {
        'ibe-date-of-birth-selector': DateOfBirthSelector,
        'ibe-contact-information': ContactInformation,
        'ibe-address-information': AddressInformation,
        'ibe-advance-passenger-information': AdvancePassengerInformation
    },
    data() {
        return {
            infantInformation: window.bookSecure.texts.infantInformation,
            enableContactInfoPrimaryPassenger: window.bookSecure.settings.enableContactInfoPrimaryPassenger,
            enableContactInfoAllPassengers: window.bookSecure.settings.enableContactInfoAllPassengers,
            enableAddressInfoPrimaryPassenger: window.bookSecure.settings.enableAddressInfoPrimaryPassenger,
            enableAddressInfoAllPassengers: window.bookSecure.settings.enableAddressInfoAllPassengers,
            enableAdvancePassengerInformation: window.bookSecure.settings.enableAdvancePassengerInformation,
            passengerTypes: passengerTypes,
            idPrefix: 'passenger-' + this.index
        }
    },
    computed: {
        ...mapGetters(
            'search',
            [
                'titlesAdults',
                'titlesChildren'
            ]
        ),
        items() {
            return this.passenger.type === passengerTypes.adult ? this.titlesAdults : this.titlesChildren
        }
    }
}
</script>

<style lang="scss" scoped>
.passenger {
    margin-bottom: 25px;
    border: $border-light;
    padding: 0 10px;
    background: white;
}

.passenger-info {
    margin-bottom: 10px;
    font-style: italic;
}

@include media(">=tablet") {
    .form-elements {
        .input,
        .dropdown,
        .date-of-birth {
            float: left;
        }
    }
}

.title {
    font-size: 22px;
    background: $color-third;
    padding: 10px;
    margin: 0 -10px 15px;
}
</style>
