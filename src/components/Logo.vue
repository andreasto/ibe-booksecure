<template>
    <div class="logo" :title="title" @click="navigateToHome"></div>
</template>

<script>
export default {
    props: {
        title: { type: String }
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
