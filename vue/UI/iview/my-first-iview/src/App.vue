<template>
  <div id="app">

    <div class="item">
      <Button type="info">信息按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="error">错误按钮</Button>
    </div>

    <div class="item" style="height: 100px; position:relative; overflow: hidden;">
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" 
        :value="item.value" 
        :key="item.value">{{ item.label }}</Option>
       </Select>
    </div>

    <div class="item">
      <Row>
        <Col span="12">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
      </Row>  
    </div>

    <div class="item">
      {{ $t('message') }}
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {},
  data() {
    return {
      cityList: [
        {
          value: "beijing",
          label: "北京市",
        },
        {
          value: "shanghai",
          label: "上海市",
        },
        {
          value: "shenzhen",
          label: "深圳市",
        },
        {
          value: "hangzhou",
          label: "杭州市",
        },
        {
          value: "nanjing",
          label: "南京市",
        },
      ],
      model1: "",
    };
  },
};
</script>

<style>
.item {
  margin: 8px;
}
</style>
