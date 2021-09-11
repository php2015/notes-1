<template>
  <div class="profile">
    {{$route.query}}
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style scoped>
</style>