<template>
  <div class="navigation">
    <router-link to="/" exact :class="{disabled: !canAccessSearch}">Search</router-link>
    <router-link to="/select" :class="{disabled: !canAccessSelect}">Select</router-link>
    <router-link to="/information" :class="{disabled: !canAccessInformation}">Information</router-link>
    <router-link to="/options" :class="{disabled: !canAccessOptions}">Options</router-link>
    <router-link to="/payment" :class="{disabled: !canAccessPayment}">Payment</router-link>
    <router-link to="/receipt" :class="{disabled: !canAccessReceipt}">Receipt</router-link>
    <div class="error" v-show="showError">Can't navigate to this</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(
      'navigation',
      [
        'showError',
        'canAccessSearch',
        'canAccessSelect',
        'canAccessInformation',
        'canAccessOptions',
        'canAccessPayment',
        'canAccessReceipt'
      ])
  }

</script>

<style scoped>
  .navigation {
    text-align: center;
    padding-bottom: 30px;
    position: relative;
  }
  
  a {
    display: inline-block;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, .2);
    text-decoration: none;
  }
  
  .disabled {
    color: rgba(0, 0, 0, .2);
    cursor: default;
  }
  
  .error {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: red;
  }
  
  .router-link-active {
    background: violet;
  }
</style>