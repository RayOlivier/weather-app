<template>
  <div>
    <h4>{{ hourData.time }}</h4>
    <weather-icon :iconName="hourData.icon"></weather-icon>
    <p>{{ hourData.weather }}</p>
    <!-- <p>rain: {{ hourData.rain }}</p> -->
  </div>
</template>

<script>
import WeatherIcon from "./weather-icon";
export default {
  Name: "HourDetails",
  props: {
    hourData: {
      type: Object,
      default: undefined
    }
  },
  components: {
    WeatherIcon
  }
};
</script>

<style lang="scss" scoped></style>
