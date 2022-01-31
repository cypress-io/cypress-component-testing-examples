<template>
  <div class="multiselect-container">
    <label class="typo__label">Single select / dropdown</label>
    <multiselect v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="false" :allow-empty="false" data-test="multiselect">
      <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong></template>
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      Multiselect
    },
    data () {
      return {
        value: null,
        options: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP', $isDisabled: true },
          { name: 'Phoenix', language: 'Elixir' }
        ]
      }
    }
  }
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.multiselect-container {
  padding: 200px 0;
}

</style>
