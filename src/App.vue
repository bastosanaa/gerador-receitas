<template>
  <div id="app">
    <NavigationTabs @tabSelectedChanged="tabSelected = $event"></NavigationTabs>
    <div class="app-content">
      <component :is="tabSelected"></component>
    </div>


</div>
</template>

<script>
import NavigationTabs from './components/template/NavigationTabs.vue';
import FridgeTab from './components/tabs/FridgeTab.vue'
import RecepiesTab from './components/tabs/RecepiesTab.vue'

export default {
  components: {
    NavigationTabs,
    FridgeTab,
    RecepiesTab
  },
  data() {
    return {
      tabSelected: 'FridgeTab'
    }
  },
  computed: {

  }
}
</script>

<style>
  @import 'normalize.css';
  @import '@/variables.css';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  

  #app {
    font-family: "Roboto", sans-serif;
    background-color: #C4E1F6;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .app-content {
    height: 100%;
  }

</style>