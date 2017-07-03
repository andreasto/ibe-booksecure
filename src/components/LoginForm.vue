<template>
    <div class="login-form clearfix">
        <h3>Modify/cancel</h3>
        <ibe-input :label="'Last name'" :value="lastName"></ibe-input>
        <ibe-input :label="'Confirmation number'" :value="confirmationNumber"></ibe-input>
        <ibe-button :action="login" :text="'Login'" :class="'button-login'"></ibe-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastName: '',
            confirmationNumber: ''
        }
    },
    methods: {
        login() {
            console.log('login')
        }
    }
}
</script>

<style lang="scss" scoped>
.login-form {
    border: 1px solid;
    padding: 20px;
    max-width: 300px;
    background-color: color-third-lighter;

    .button-login {
        float: right;
    }
}
</style>
