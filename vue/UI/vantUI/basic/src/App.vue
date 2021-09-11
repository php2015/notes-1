<template>
  <div id="app">
    <div class="title">人口与计划生育法修正草案将于下周提请审议</div>
    <p class="content">十三届全国人大常委会第三十次会议将于8月17日至20日在北京举行。今天全国人大常委会法工委举行记者会，通报本次常委会会议拟审议的法律草案的主要情况，其中将对人口与计划生育法修正草案提请审议。</p>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less">
.title {
  font-size: 30px;
  /* 显示就是0.4rem，因为30/75 */
  text-align: center;
  font-weight: bold;
}
.content {
  font-size: 24px;
  line-height: 2;
}

.box {
  height: 100px;
  background: linear-gradient(to right, yellow, blue);
}
</style>

