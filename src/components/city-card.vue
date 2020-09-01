<template>
  <div class="card-container">
    <button type="button">x</button>
    <div v-if="!cityData">
      Loading...
    </div>
    <div v-if="cityData" class="card">
      <h1>{{ cityData.name }}</h1>
      <div class="weather-icon">
        <weather-icon :iconName="cityData.icon"></weather-icon>
      </div>
      <h4>{{ cityData.icon }}</h4>
      <div>
        <p>Current {{ cityData.currentTemp }}°</p>
        <p>Min {{ cityData.minTemp }}°</p>
        <p>Max {{ cityData.maxTemp }}°</p>
        <p>Humidity {{ cityData.humidity }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from '../services';
import WeatherIcon from './weather-icon';
export default {
  name: 'CityCard',

  props: {
    zipcode: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      cityData: undefined,
    };
  },
  async created() {
    console.log('apiService', apiService);
    this.cityData = await apiService.getWeatherFromZip(this.zipcode);
    console.log('this.cityData', this.cityData);
  },
  components: {
    WeatherIcon,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 300px;
  border-radius: 8px;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 5px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.weather-icon {
  height: 50px;
  width: 50px;
}
</style>
