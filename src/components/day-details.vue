<template>
  <div>
    <h2>{{ dayData.day }}</h2>
  </div>
</template>

<script>
export default {
  Name: "DayDetails",
  props: {
    dayData: {
      type: Object,
      default: undefined
    }
  }
};
</script>

<style lang="scss" scoped></style>
