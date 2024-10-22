import Vue from 'vue'
import App from './App.vue'
import store from './store';
import 'normalize.css'
import './variables.css';

import NavigationTabs from './components/template/NavigationTabs.vue'
import FridgeTab from './components/tabs/FridgeTab.vue'
import RecepiesTab from './components/tabs/RecepiesTab.vue'
import InputIngredients from './components/FridgeTabCompontents/InputIngredients.vue'
import ContainerIngredients from './components/FridgeTabCompontents/ContainerIngredients.vue';
import ItemIngredient from './components/FridgeTabCompontents/ItemIngredient.vue';
import RecepiesPrompt from './components/RecepiesTabComponents/RecepiesPrompt.vue';
import ToggleSwitch from './components/widgets/ToggleSwitch.vue';

Vue.config.productionTip = false

Vue.component(NavigationTabs)
Vue.component(FridgeTab)
Vue.component(RecepiesTab)
Vue.component(InputIngredients)
Vue.component(ContainerIngredients)
Vue.component(ItemIngredient)
Vue.component(RecepiesPrompt)
Vue.component(ToggleSwitch)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
