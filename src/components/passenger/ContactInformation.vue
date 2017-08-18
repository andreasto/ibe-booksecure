<template>
    <div class="contact-information">
        <h3>Contact information</h3>
        <div class="form-elements clearfix">
            <ibe-input v-model="contactInfo.phone" :id="idPrefix + '-contact-phone'" :name="idPrefix + '-contact-phone'" :label="'Home phone'" :placeholder="'i.e. 004355744880046'" :validation="'required|alpha_num'"></ibe-input>
            <ibe-input v-model="contactInfo.mobile" :id="idPrefix + '-contact-mobile'" :name="idPrefix + '-contact-mobile'" :label="'Mobile phone'" :placeholder="'i.e. 004355744880046'" :validation="'required|alpha_num'"></ibe-input>
            <ibe-input v-model="contactInfo.workPhone" :id="idPrefix + '-contact-work-phone'" :name="idPrefix + '-contact-work-phone'" :label="'Work phone'" :placeholder="'i.e. 004355744880046'" :validation="'alpha_num'"></ibe-input>
            <ibe-input v-model="contactInfo.email" :id="idPrefix + '-contact-email'" :name="idPrefix + '-contact-email'" :label="'Email'" :validation="'required|email'"></ibe-input>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contactInfo: { type: Object, required: true },
        index: { type: Number, required: true }
    },
    data() {
        return {
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
