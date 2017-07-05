<template>
    <div id="app">
        <header class="main-header">
            <ibe-logo v-show="!onlySearchForm"></ibe-logo>
            <ibe-navigation v-show="!onlySearchForm && !hideNavigation"></ibe-navigation>
        </header>

        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>

        <div class="colors" v-show="showColors">
            <ibe-color-palette :color="'primary'" v-show="!onlySearchForm"></ibe-color-palette>
            <ibe-color-palette :color="'second'" v-show="!onlySearchForm"></ibe-color-palette>
            <ibe-color-palette :color="'third'" v-show="!onlySearchForm"></ibe-color-palette>

        </div>
        <ibe-footer v-show="!onlySearchForm"></ibe-footer>

        <ibe-button :action="clearLocalStorage" :text="'Clear localStorage'"></ibe-button>
        <ibe-viewport-size></ibe-viewport-size>

    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ColorPalette from '@/components/ColorPalette'
import Logo from '@/components/Logo'
import ViewportSize from '@/components/ViewportSize'

export default {
    name: 'app',
    components: {
        'ibe-footer': Footer,
        'ibe-navigation': Navigation,
        'ibe-color-palette': ColorPalette,
        'ibe-logo': Logo,
        'ibe-viewport-size': ViewportSize
    },
    data: () => ({
        showColors: false
    }),
    computed: {
        route() {
            return this.$route.name
        },
        onlySearchForm() {
            return this.route === 'SearchForm'
        },
        hideNavigation() {
            return this.route === 'Receipt'
        }
    },
    methods: {
        clearLocalStorage() {
            localStorage.clear()
            sessionStorage.clear()
        }
    }
}
</script>

<style lang="scss" src="./styles/global.scss"></style>

<style lang="scss">
.main-header {
    text-align: center;
    margin-bottom: 20px;
    @include media(">tablet") {
        display: flex;
        justify-content: space-between;
    }
}
</style>

