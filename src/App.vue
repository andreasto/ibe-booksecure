<template>
  <div id="app">
    <ibe-header v-show="!onlySearchForm"></ibe-header>
    <ibe-navigation v-show="!onlySearchForm"></ibe-navigation>

    <router-view></router-view>

    <ibe-footer v-show="!onlySearchForm"></ibe-footer>
    <ibe-color-palette :color="'primary'" v-show="!onlySearchForm"></ibe-color-palette>
    <ibe-color-palette :color="'second'" v-show="!onlySearchForm"></ibe-color-palette>
    <ibe-color-palette :color="'third'" v-show="!onlySearchForm"></ibe-color-palette>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ColorPalette from '@/components/ColorPalette'

export default {
  name: 'app',
  components: {
    'ibe-header': Header,
    'ibe-footer': Footer,
    'ibe-navigation': Navigation,
    'ibe-color-palette': ColorPalette
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
  }
}
</script>

<style lang="stylus" src="./styles/global.styl"></style>
