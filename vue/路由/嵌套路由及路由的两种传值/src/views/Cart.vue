<template>
  <div class="cart">
    <!-- {{$route.params.cartId}} -->
  </div>
</template>

<script>
export default {
  name: "Cart",
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
</style>