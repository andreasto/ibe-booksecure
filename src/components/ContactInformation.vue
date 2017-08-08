<template>
    <div class="contact-information">
        <div class="title">Contact information</div>
        <div class="form-elements clearfix">
            <ibe-input :id="'contact-phone'" :name="'contactPhone'" v-model="contactInfo.phone" :label="'Home phone'" :placeholder="'i.e. 004355744880046'" :validation="'required|alpha_num'"></ibe-input>
            <ibe-input :id="'contact-mobile'" :name="'contactMobile'" v-model="contactInfo.mobile" :label="'Mobile phone'" :placeholder="'i.e. 004355744880046'" :validation="'required|alpha_num'"></ibe-input>
            <ibe-input :id="'contact-work-phone'" :name="'contactWorkPhone'" v-model="contactInfo.workPhone" :label="'Work phone'" :placeholder="'i.e. 004355744880046'" :validation="'alpha_num'"></ibe-input>
            <ibe-input :id="'contact-email'" :name="'contactEmail'" v-model="contactInfo.email" :label="'Phone'" :validation="'required|email'"></ibe-input>
        </div>
        {{contactInfo}}
    </div>
</template>

<script>
export default {
    props: {
        contactInfo: { type: Object, required: true }
    }
}
</script>

<style lang="scss" scoped>
.contact-information {
    margin-bottom: 20px;
}

@include media(">=tablet") {
    .form-elements {
        .input,
        .dropdown {
            float: left;
        }
    }
}

.title {
    font-size: 22px;
    margin-bottom: 10px;
}
</style>
