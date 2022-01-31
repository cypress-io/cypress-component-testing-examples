<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default {
    components: { DatePicker },
    data() {
      return {
        time1: null,
        time2: null,
        time3: null,
      };
    },
  };
</script>

<template>
  <div class="datepicker-container">
    <date-picker v-model="time1" valueType="format" data-test="datepicker-format"></date-picker>
  </div>
</template>

<style scoped>
  .datepicker-container {
    margin: 100px 0;
  }
</style>