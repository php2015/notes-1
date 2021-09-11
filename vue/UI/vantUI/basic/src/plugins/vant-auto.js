import Vue from 'vue';
import { Button, Form, Field } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/form/style';
import 'vant/lib/field/style';


[Button, Form, Field].forEach(item => {
  Vue.use(item) // 全局注册
})
