<template>
  <div id="app">
    <header class="main-header">
      <ibe-logo v-show="!onlySearchForm"></ibe-logo>
      <ibe-navigation v-show="!onlySearchForm"></ibe-navigation>
    </header>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    <ibe-color-palette :color="'primary'" v-show="!onlySearchForm"></ibe-color-palette>
    <ibe-color-palette :color="'second'" v-show="!onlySearchForm"></ibe-color-palette>
    <ibe-color-palette :color="'third'" v-show="!onlySearchForm"></ibe-color-palette>
    <ibe-footer v-show="!onlySearchForm"></ibe-footer>

    <ibe-button :action="clearLocalStorage" :text="'Clear localStorage'"></ibe-button>

    <div>
      <label class="label" for="email">Testing form validation</label>
      <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('required')" class="help is-danger">{{ errors.first('required') }}</span>
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ColorPalette from '@/components/ColorPalette'
import Logo from '@/components/Logo'

export default {
  name: 'app',
  components: {
    'ibe-footer': Footer,
    'ibe-navigation': Navigation,
    'ibe-color-palette': ColorPalette,
    'ibe-logo': Logo
  },
  data() {
    return {
      onlySearchForm: this.$route.path === '/search-form'
    }
  },
  computed: {
    route() {
      return this.$route.name
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

<style lang="stylus" src="./styles/global.styl"></style>

<style lang="stylus">
  .main-header
    display flex
    justify-content space-between
    margin-bottom 20px
</style>

