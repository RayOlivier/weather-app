<template>
  <v-card class="day-card">
    <h2>{{ dayData.day }}</h2>
    <div class="d-flex flex-wrap">
      <hour-details v-for="hour of dayData.forecast" :key="hour.time" :hourData="hour"></hour-details>
    </div>
  </v-card>
</template>

<script>
import HourDetails from "./hour-details.vue";
export default {
  Name: "DayDetails",
  props: {
    dayData: {
      type: Object,
      default: undefined
    }
  },
  components: {
    HourDetails
  }
};
</script>

<style lang="scss" scoped>
.day-card {
  margin: 20px;
}
</style>
