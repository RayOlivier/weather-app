<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomePage />

    <input v-model="newZipcode" @submit="addZipcode" placeholder="enter zipcode" />
    <button type="button" @click="addZipcode">Add City</button>

    <div class="city-card-container">
      <CityCard v-for="zip in zipcodeList" :zipcode="zip" :key="zip" @delete="deleteCard" />
    </div>
  </div>
</template>

<script>
import HomePage from '@/components/home-page.vue'; // @ is an alias to /src
import CityCard from '@/components/city-card.vue';
export default {
  components: {
    HomePage,
    CityCard,
  },
  data() {
    return {
      newZipcode: '',
      zipcodeList: [75007, 75035],
    };
  },
  methods: {
    addZipcode(event) {
      event.preventDefault();
      console.log('this.newZipcode', this.newZipcode);
      if (this.newZipcode.length === 5) {
        this.zipcodeList.push(parseInt(this.newZipcode));
        this.newZipcode = '';
      }
    },
    deleteCard(zip) {
      this.zipcodeList.findIndex((x) => x === zip);
    },
  },
};
</script>

<style scoped>
.city-card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
