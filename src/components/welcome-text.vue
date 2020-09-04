<template>
  <div>
    <h1>Welcome to Weather Buddy</h1>
    <h1>{{ currentTime }}</h1>
  </div>
</template>

<script>
import { format } from "date-fns";

const dateDisplayFormat = "EEEE, MMMM do h:mm:ss";
let interval;
export default {
  name: "WelcomeText",
  created() {
    this.getTime();
  },
  destroyed() {
    clearInterval(interval);
  },
  data() {
    return { currentTime: new Date() };
  },
  methods: {
    getTime() {
      console.log("getting time");
      const unformattedTime = new Date();
      this.currentTime = format(unformattedTime, dateDisplayFormat);
      interval = setTimeout(this.getTime, 1000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
