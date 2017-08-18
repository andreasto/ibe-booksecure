<template>
    <div class="address-information">
        <h3>Address information</h3>
        <div class="form-elements clearfix">
            <ibe-input v-model="addressInfo.address1" :id="idPrefix + '-address-address1'" :name="idPrefix + '-address-address1'" :label="'Address 1'" :placeholder="'Enter primary address'" :validation="'required'"></ibe-input>
            <ibe-input v-model="addressInfo.address2" :id="idPrefix + '-address-address2'" :name="idPrefix + '-address-address2'" :label="'Address 2'" :placeholder="'Enter secondary address'"></ibe-input>
            <ibe-input v-model="addressInfo.city" :id="idPrefix + '-address-city'" :name="idPrefix + '-address-city'" :label="'City'" :placeholder="'Enter city'" :validation="'required'"></ibe-input>
            <ibe-input v-model="addressInfo.zip" :id="idPrefix + '-address-zip'" :name="idPrefix + '-address-zip'" :label="'Postal code'" :placeholder="'Enter postal code'"></ibe-input>
            <ibe-dropdown v-model="addressInfo.country" :id="idPrefix + '-address-country'" :name="idPrefix + '-address-country'" :items="countries" :item-value="'code'" :item-text="'name'" :validation="'required'" :label="'Country'" :placeholder="'Select country'" :min-width="'120px'"></ibe-dropdown>
        </div>
    </div>
</template>

<script>
import { countries } from '@/core/countries'
export default {
    props: {
        addressInfo: { type: Object, required: true },
        index: { type: Number, required: true }
    },
    data() {
        return {
            countries,
            idPrefix: 'passenger-' + this.index
        }
    }
}
</script>

<style lang="scss" scoped>
@include media(">=tablet") {
    .form-elements {
        .input,
        .dropdown {
            float: left;
        }
    }
}
h3 {
    margin: 5px 0 10px 5px;
}
</style>
