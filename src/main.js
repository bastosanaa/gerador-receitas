import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/variables.css';
import NavigationTabs from './components/template/NavigationTabs.vue'
import FridgeTab from './components/tabs/FridgeTab.vue'
import RecepiesTab from './components/tabs/RecepiesTab.vue'
import InputIngredients from './components/FridgeTabCompontents/InputIngredients.vue'

Vue.config.productionTip = false

Vue.component(NavigationTabs)
Vue.component(FridgeTab)
Vue.component(RecepiesTab)
Vue.component(InputIngredients)

new Vue({
  render: h => h(App),
}).$mount('#app')
