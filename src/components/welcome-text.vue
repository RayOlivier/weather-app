<template>
  <div>
    <h1>Welcome to Weather Buddy</h1>
    <h1>{{ currentTime }}</h1>
  </div>
</template>

<script>
import { format } from "date-fns";

const dateDisplayFormat = "EEEE, MMMM do h:mm:ss";
export default {
  name: "WelcomeText",
  created() {
    this.getTime();
  },

  data() {
    return { currentTime: new Date() };
  },
  methods: {
    getTime() {
      console.log("getting time");
      const unformattedTime = new Date();
      this.currentTime = format(unformattedTime, dateDisplayFormat);
      setTimeout(this.getTime, 1000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
