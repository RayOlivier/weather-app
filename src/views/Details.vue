<template>
  <div class="d-flex flex-column align-center">
    <day-details v-for="day in sortedForcast" :dayData="day" :key="day.day"> test</day-details>
  </div>
</template>

<script>
import { apiService } from "../services";
import DayDetails from "../components/day-details";
export default {
  name: "Details",
  components: {
    DayDetails
  },
  data() {
    return {
      sortedForcast: []
    };
  },
  methods: {
    parseForecast(forecast) {
      this.sortedForcast = [];

      let previousDay = null;
      let dayData = {};
      dayData.forecast = [];
      forecast.list.forEach(hour => {
        if (!previousDay) {
          previousDay = hour.day;
        }
        if (previousDay !== hour.day) {
          this.sortedForcast.push(dayData);
          dayData = {};
          dayData.forecast = [];
          previousDay = hour.day;
        }
        dayData.day = hour.day;
        dayData.forecast.push(hour);
      });
      console.log("this.sortedForecast", this.sortedForecast);
    }
  },
  async created() {
    const forecast = await apiService.getHourlyForecast(this.$route.params.zipcode);
    console.log("forecast", forecast);
    this.parseForecast(forecast);
  }
};
</script>

<style lang="scss" scoped></style>
