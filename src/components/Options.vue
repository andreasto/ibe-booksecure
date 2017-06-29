<template>
  <div>
    <h1>Options</h1>

    <ibe-previous-next :nextAction="nextAction"></ibe-previous-next>
  </div>
</template>

<script>
export default {
  methods: {
    nextAction() {
      console.log('go next')
    }
  }
}
</script>
