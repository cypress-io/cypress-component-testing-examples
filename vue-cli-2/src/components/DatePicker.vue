<template>
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      class="mt-4"
      :min="date"
      :max="maximumDate"
    ></v-date-picker>
  </v-row>
</template>

<script>
  import dayjs from "dayjs"
  const today = dayjs().format("YYYY-MM-DD")
  const maximumDate = dayjs(today).add(1, 'M').format("YYYY-MM-DD")

  export default {
    data: () => ({
      date: today,
      maximumDate
    }),
  }
</script>