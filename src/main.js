import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import FastClick from 'fastclick'
import 'utils/permission'
import SvgIcon from 'components/SvgIcon'
import '@/icons' // icon
import '@/style/common.scss'
import { Lazyload, Checkbox, CheckboxGroup, Popup, Picker, Calendar,Toast,Notify,DatetimePicker } from 'vant' //Calendar
import defaultSettings from '@/settings'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'

if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

FastClick.attach(document.body)

// options 为可选参数，无则不传
Vue.use(Lazyload)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Calendar)
Vue.use(Toast)
Vue.use(Notify)
Vue.use(DatetimePicker)
Vue.component('svg-icon', SvgIcon)

if (process.env.NODE_ENV === 'development' && defaultSettings.vconsole) {
  const VConsole = require('vconsole')
  // eslint-disable-next-line
  const my_console = new VConsole()
}
// var vConsole = new VConsole(option)

// element-ui 引用
// import {
//   Steps
// } from 'element-ui'
// Vue.component(Steps);
// import 'element-ui/lib/theme-chalk/index.css'
// const componentsArr = {
//   Steps
// }
// Object.keys(componentsArr).forEach(item => {
//   Vue.component(componentsArr[item].name, componentsArr[item])
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  watch: {

  }
}).$mount('#app')
