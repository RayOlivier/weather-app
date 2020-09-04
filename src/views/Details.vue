<template>
  <div>TEST</div>
</template>

<script>
import { apiService } from "../services";
export default {
  name: "Details",
  //   props: {
  //     zipcode: {
  //       type: Number
  //     }
  //   },
  async created() {
    console.log("this.props", this.props);
    console.log("this.zipcode", this.zipcode);
    console.log("this.$route", this.$route);
    await apiService.getHourlyForecast(this.$route.params.zipcode);
  }
};
</script>

<style lang="scss" scoped></style>
