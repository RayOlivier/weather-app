<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <v-text-field v-model="newZipcode" @submit="addZipcode" placeholder="enter zipcode" />
    <v-btn class="primary" type="button" @click="addZipcode">Add City</v-btn>

    <div class="city-card-container">
      <CityCard v-for="zip in zipcodeList" :zipcode="zip" :key="zip" @delete="deleteCard" />
    </div>
  </div>
</template>
<script>
import CityCard from "@/components/city-card.vue";
import { mapState } from "vuex";

export default {
  components: {
    CityCard
  },
  data() {
    return {
      newZipcode: ""
    };
  },
  methods: {
    addZipcode(event) {
      event.preventDefault();
      console.log("this.newZipcode", this.newZipcode);
      if (this.newZipcode.length === 5) {
        this.zipcodeList.push(parseInt(this.newZipcode));
        this.newZipcode = "";
      }
    },
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
