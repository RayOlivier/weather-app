<template>
  <div class="home">
    <AddCity />
    <div class="city-card-container">
      <CityCard v-for="zip in zipcodeList" :zipcode="zip" :key="zip" @delete="deleteCard" />
    </div>
  </div>
</template>
<script>
import CityCard from "@/components/city-card.vue";
import AddCity from "@/components/add-city.vue";
import { mapState } from "vuex";

export default {
  components: {
    CityCard,
    AddCity
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
.city-card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
