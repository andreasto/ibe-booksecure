<template>
    <img class="logo" :title="logo.title" :src="logo.url" :style="{ width: logo.width, height: logo.height }" @click="navigateToHome" />
</template>

<script>
export default {
    data() {
        return {
            logo: window.bookSecure.settings.logo
        }
    },
    methods: {
        navigateToHome() {
            this.$store.dispatch('navigation/navigateTo', '/')
        }
    }
}
</script>

<style lang="scss" scoped>
.logo {
    display: inline-block;
    width: $logo-width;
    height: $logo-height;
    background: url($logo-url) no-repeat;
    background-size: 100%;
    cursor: pointer;
}
</style>
