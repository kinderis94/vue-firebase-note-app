// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'jquery/dist/jquery.min.js'
import Vue from 'vue'
var VueFire = require('vuefire')
var Firebase = require('firebase')
import App from './App'
import router from './router'

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
