<template>
  <div id="app">
    <ibe-header></ibe-header>
    <ibe-navigation></ibe-navigation>

    <router-view></router-view>

    <ibe-footer></ibe-footer>
    <ibe-color-palette :color="'primary'"></ibe-color-palette>
    <ibe-color-palette :color="'second'"></ibe-color-palette>
    <ibe-color-palette :color="'third'"></ibe-color-palette>
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
  computed: {
    route() {
      return this.$route.name
    }
  }
}
</script>

<style lang="stylus" src="./styles/global.styl"></style>
