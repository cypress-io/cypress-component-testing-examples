<template>
  <div class="tour-container" data-test="tour-container">
    <div id="v-step-0">The first step will pop on this element because its ID is 'v-step-0'.</div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="v-step-1">The second step will pop on this element because its ID is 'v-step-1'.</div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div data-v-step="2">The third and final step will pop on this element because its ID is 'v-step-2'.</div>

    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<style scoped>
.tour-container {
  padding: 200px 0;
}

</style>

<script>
  export default {
    name: 'my-tour',
    data () {
      return {
        steps: [
          {
            target: '#v-step-0',
            content: `Step 1`
          },
          {
            target: '.v-step-1',
            content: 'Step 2'
          },
          {
            target: '[data-v-step="2"]',
            content: 'Step 3',
            params: {
              placement: 'top'
            }
          }
        ]
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    }
  }
</script>