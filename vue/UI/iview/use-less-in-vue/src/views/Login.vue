<template>
  <div class="login">
    <h4>你还没有登录</h4>
    <Button type="info" @click.native="login">登录</Button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      window.localStorage.setItem("isAdmin", 1);
    },
  },
};
</script>