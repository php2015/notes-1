
const mixin = {
  created() {
    console.log(this.name);
  },
  data() {
    return {
      name: 'mixin'
    }
  }
}

export default mixin