<template>
  <div id="app">
  <h3>{{recordTime}}</h3>
  <h3>{{now}}</h3>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "App",
  data() {
    return {
      now: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
  },
  mounted() {
    setInterval(() => {
      this.now = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  },
  components: {},
  computed: {
    recordTime() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>

<style>
</style>
