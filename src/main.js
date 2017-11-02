// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VhBar from './components/charts/index.js'
import Highcharts from 'highcharts'
import vhighcharts from './test/vue-highcharts.js'
window.Highcharts = Highcharts
Vue.config.productionTip = false
Vue.use(vhighcharts)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
