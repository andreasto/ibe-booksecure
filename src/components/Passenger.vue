<template>
    <div class="passenger">
        {{passenger}}
        <div class="title">Passenger {{index}}</div>
        <div class="form-elements">
            <ibe-dropdown :items="titlesAdults" :value="passenger.tile" :label="'Title'" :placeholder="'Select title'" :min-width="'140px'"></ibe-dropdown>
            <ibe-input :id="'some-id'" :name="'firstName'" :value="passenger.firstName" :label="'First name'" :validation="'required'" @valueChanged="passenger.firstName = $event"></ibe-input>
            <ibe-input :id="'some-id'" :name="'lastName'" :value="passenger.lastName" :label="'Last name'" :validation="'required'"></ibe-input>
            <ibe-input :id="'some-id'" :name="'email'" :value="passenger.email" :label="'E-mail'" :validation="'required'"></ibe-input>
            <ibe-input :id="'some-id'" :name="'phone'" :value="passenger.phone" :label="'Phone'" :validation="'required'"></ibe-input>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        passenger: Object,
        index: Number
    },
    computed: {
        ...mapGetters(
            'search',
            [
                'titlesAdults',
                'titlesChildren'
            ]
        )
    }
}
</script>

<style lang="scss" scoped>
.passenger {
    margin-bottom: 20px;
}

.form-elements {
    @include media(">tablet") {
        display: flex;
    }
}

.title {
    font-size: 22px;
    margin-bottom: 10px;
}
</style>
