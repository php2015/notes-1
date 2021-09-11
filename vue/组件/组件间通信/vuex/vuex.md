#### vuex包括

- **state**
- **getters(state, getters, rootState, rootGetters)**
- **actions({dispatch, commit, state, getters, rootState, rootGetters)}, payload)**
- **mutations(state, payload)**
- **modules**



#### state和getters的辅助函数引入

```js
import {mapState, mapGetters} from 'vuex';

computed:{
  ...mapState([]),
  ...mapGetters([]),
}
```



#### dispatch和commit的区别

dispatch是分发一个action，action里可以处理复杂的操作，包括向后台提交数据等异步操作。commit是提交一个mutation，同步操作去修改state



#### 为什么能在actions里更改state

因为devtools要追踪state的变化，actions里面存在异步操作，不能确定什么时候能返回数据。因此必须通过mutations去更改state



#### store.js

````js
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store
````



