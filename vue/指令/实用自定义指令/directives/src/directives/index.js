import Vue from 'vue'
import drag from './drag' // 引入指令
import copy from './copy' // 引入指令
// import other directives

const directives = {
  drag,
  copy

  // other directives
}

Object.keys(directives).forEach(name => Vue.directive(name, directives[name]))