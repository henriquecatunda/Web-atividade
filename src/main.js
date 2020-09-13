import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.tasks = []

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
