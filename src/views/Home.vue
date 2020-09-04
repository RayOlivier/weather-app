<template>
  <div class="home">
    <div class="welcome-row">
      <WelcomeText />
      <AddCity />
    </div>
    <div class="city-card-container">
      <CityCard v-for="zip in zipcodeList" :zipcode="zip" :key="zip" @delete="deleteCard" />
    </div>
  </div>
</template>
<script>
import CityCard from "@/components/city-card.vue";
import AddCity from "@/components/add-city.vue";
import WelcomeText from "@/components/welcome-text.vue";

import { mapState } from "vuex";

export default {
  components: {
    CityCard,
    AddCity,
    WelcomeText
  },

  methods: {
    deleteCard(zip) {
      this.zipcodeList.findIndex(x => x === zip);
    }
  },
  computed: {
    ...mapState(["zipcodeList"])
  }
};
</script>

<style scoped>
.welcome-row {
  padding: 0 20px;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  margin-bottom: 40px;
}
.city-card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
