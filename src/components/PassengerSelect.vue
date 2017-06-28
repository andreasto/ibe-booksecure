<template>
  <div class="form-group passenger-select">
    <label>Select passengers</label>
    <div class="click-area" @click="toggleDropDown">{{passengerSelectText}}</div>
    <ul v-show="showDropDown">
      <li>
        Adults
        <button @click="$store.commit('search/decrementAdults')">-</button>
        <button @click="$store.commit('search/incrementAdults')">+</button>
      </li>
      <li>
        Children
        <button @click="$store.commit('search/decrementChildren')">-</button>
        <button @click="$store.commit('search/incrementChildren')">+</button>
      </li>
      <li>
        Infants
        <button @click="$store.commit('search/decrementInfants')">-</button>
        <button @click="$store.commit('search/incrementInfants')">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: [
      'value'
    ],
    data() {
      return {
        showDropDown: false
      }
    },
    computed: mapGetters(
      'search',
      [
        'passengerSelectText'
      ]),
    methods: {
      toggleDropDown() {
        this.showDropDown = !this.showDropDown
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .passenger-select
    ul {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      background: white;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid rgba(0, 0, 0, .2);
      z-index: 10;
    }
    
    li {
      padding: 10px;
    }
</style>