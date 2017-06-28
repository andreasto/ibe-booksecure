<template>
  <div id="app">
    <ibe-header></ibe-header>
    <ibe-navigation></ibe-navigation>

    <router-view></router-view>

    <ibe-footer></ibe-footer>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    name: 'app',
    components: {
      'ibe-header': Header,
      'ibe-footer': Footer,
      'ibe-navigation': Navigation
    }
  }
</script>

<style src="./styles/global.css"></style>
