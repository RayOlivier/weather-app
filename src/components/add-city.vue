<template>
  <div class="d-flex align-center">
    <v-text-field v-model="newZipcode" @submit="addZipcode" placeholder="enter zipcode" />
    <v-btn class="primary" type="button" @click="addZipcode">Add City</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddCity",
  data() {
    return {
      newZipcode: ""
    };
  },
  methods: {
    ...mapActions(["addZipcodeAction"]),
    addZipcode(event) {
      event.preventDefault();
      console.log("this.newZipcode", this.newZipcode);
      if (this.newZipcode.length === 5) {
        this.addZipcodeAction(parseInt(this.newZipcode));
        this.newZipcode = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
