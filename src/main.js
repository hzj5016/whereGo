import Vue from 'vue'
import App from './App'
import router from './router'
// 解决手机不同的默认样式css库
import './assets/reset.css'
// 解决手机一边框问题css库
import './assets/border.css'
import fastClick from 'fastclick'

// 移动端点击事件300ms延迟,绑定到body上
fastClick.attach(document.body)
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(vm)
