<template>
  <div class="weather-icon">
    <div v-if="iconName === 'Rain'">
      <v-icon x-large color="black">mdi-weather-pouring</v-icon>
    </div>
    <div v-else-if="iconName === 'Clear'">
      <v-icon x-large color="black">mdi-weather-sunny</v-icon>
    </div>
    <div v-else-if="iconName === 'Clouds'">
      <v-icon x-large color="black">mdi-weather-cloudy</v-icon>
    </div>
    <div v-else>
      <v-icon x-large color="black">mdi-cloud-question</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherIcon",
  props: {
    iconName: {
      type: String,
      default: undefined
    }
  }
};
</script>
