<template>
  <v-card class="card-container secondary">
    <div v-if="!cityData">
      Loading...
    </div>
    <div v-if="cityData" class="card">
      <v-row>
        <v-btn type="button"><v-icon>mdi-refresh</v-icon></v-btn>
        <v-btn @click="deleteCity" type="button">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-row>
      <v-card-title>{{ cityData.name }}</v-card-title>
      <v-card-subtitle> {{ zipcode }} </v-card-subtitle>
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
      <v-btn>More details</v-btn>
    </div>
  </v-card>
</template>

<script>
import { apiService } from "../services";
import WeatherIcon from "./weather-icon";
export default {
  name: "CityCard",
  components: {
    WeatherIcon
  },
  props: {
    zipcode: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      cityData: undefined
    };
  },
  async created() {
    // console.log("apiService", apiService);
    this.cityData = await apiService.getWeatherFromZip(this.zipcode);
    // console.log("this.cityData", this.cityData);
  },
  methods: {
    deleteCity() {
      this.$store.dispatch("deleteZipcodeAction", this.zipcode);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 300px;
  padding: 8px;
  background: accent;
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
