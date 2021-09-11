<template>
  <div class="about">

    <div class="about-links">
      <router-link to="/about/fruits">fruits</router-link>
      <router-link to="/about/animals">animals</router-link>
    </div>

    <div class="about-views">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      path: "/about/fruits",
    };
  },
  created() {
    console.log("About created");
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    // console.log(this.path);
    next();
  },
  activated() {
    // console.log(this.path);
    if (this.$route.path !== this.path) {
      this.$router.push(this.path);
    }
  },
};
</script>

<style scoped>
.about {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}

.about-links {
  width: 100px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
}

.router-link-exact-active {
  background: transparent;
  color: #44f;
}
</style>