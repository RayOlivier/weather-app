<template>
  <div class="hour-container">
    <h4>{{ hourData.time }}</h4>
    <p>{{ hourData.temp }}°</p>
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

<style lang="scss" scoped>
.hour-container {
  width: 100px;
  margin: 15px 0;
  border-right: solid thin dimgrey;

  &:last-of-type {
    border-right: none;
  }
}
</style>
