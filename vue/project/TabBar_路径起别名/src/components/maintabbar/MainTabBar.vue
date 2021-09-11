<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" active-color="#f44">
        <i slot="item-icon" class="iconfont icon-shouye"></i>
        <div slot="item-txt">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" active-color="#f44">
        <i slot="item-icon" class="iconfont icon-fenlei"></i>
        <div slot="item-txt">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/cart" active-color="#f44">
        <i slot="item-icon" class="iconfont icon-gouwuchekong"></i>
        <div slot="item-txt">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="/profile" active-color="#f44">
        <i slot="item-icon" class="iconfont icon-wode"></i>
        <div slot="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
@import "../../assets/css/tabbar/iconfont/iconfont.css";
.iconfont {
  font-size: 18px;
}
</style>