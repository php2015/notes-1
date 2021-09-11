<template>
  <div id="app">

  
  <div>
    <h3>父子间通信</h3>
    <div class="box">
      <parent />
      <tab-parent />
      <big />
      <sync-parent />
      <model-parent />
    </div>
  </div>

  <div>
    <h3>父子多层通信</h3>
    <creature />
  </div>
  </div>
</template>

<script>
import Parent from "./components/props/Parent";
import TabParent from "./components/refs/TabParent";
import Big from "./components/parent_children/Big";
import Creature from "./components/attrs/Creature";
import SyncParent from "./components/sync/SyncParent";
import ModelParent from "./components/model/ModelParent";

export default {
  name: "App",
  components: {
    Parent,
    TabParent,
    Big,
    Creature,
    SyncParent,
    ModelParent,
  },
};
</script>

<style>
#app {
  font: 14px "microsoft yahei", "sans-serif";
}

.box {
  display: flex;
  flex-flow: row wrap;
}
</style>
