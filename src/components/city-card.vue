<template>
  <v-card class="card-container " :loading="!cityData">
    <div class="card__inner d-flex align-center justify-space-around">
      <div v-if="!cityData">
        Loading...
      </div>
      <v-col v-else-if="cityData && cityData.error">
        <v-alert color="error"> Error, zipcode not found</v-alert>
        <v-card-title> {{ cityData.zipcode }} </v-card-title>
        <v-col>
          <v-btn class="error-btns" type="button">Try Again<v-icon>mdi-refresh</v-icon></v-btn>
          <v-btn class="error-btns" @click="deleteCity" type="button">Delete<v-icon>mdi-delete</v-icon></v-btn>
        </v-col>
      </v-col>
      <div v-else class="city-data">
        <v-row class="justify-space-between">
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

  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  margin-bottom: 5px;
}

.card__inner {
  padding: 8px;
  height: 100%;
}

.error-btns {
  width: 140px;
  margin: 10px 0;
}

.city-data {
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
