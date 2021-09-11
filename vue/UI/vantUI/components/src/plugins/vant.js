import Vue from 'vue';
import { Button, Icon, Col, Row } from 'vant';
import 'vant/lib/index.css';

[Button, Icon, Col, Row].forEach(item => {
  Vue.use(item)
})