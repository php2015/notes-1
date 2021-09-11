<template>
  <div id="app">
    <div id="nav">
      <Menu :active-name="path" >
        <!-- <Menu-group title="内容管理"> -->
            <Menu-item to="/home" name="/home">
                Home
            </Menu-item>
            <!-- <Menu-item to="/about" name="about" target="_blank"> -->
            <Menu-item to="/about" name="/about">
                About
            </Menu-item>
            <Menu-item to="/login" name="/login">
                Login
            </Menu-item>
            <Menu-item to="/admin" name="/admin">
                Admin
            </Menu-item>
        <!-- </Menu-group> -->
    </Menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      path: this.$route.path,
    };
  },
  mounted() {
    // console.log("mounted");
    this.path = this.$route.path;
  },
  watch: {
    "$route.path": {
      handler(newVal) {
        // console.log(newVal);
        this.path = newVal;
        // console.log(this.path);
      },
    },
  },
  methods: {
    // handleSelect(name) {
    //   this.$router.push(name);
    // },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
