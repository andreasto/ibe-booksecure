<template>
  <div>
    <h1>Options</h1>

    <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
  </div>
</template>

<script>
import router from '@/router'

export default {
  methods: {
    previousAction() {
      router.push('information')
    },
    nextAction() {
      console.log('go next')
    }
  }
}
</script>
