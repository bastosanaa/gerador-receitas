<template>
  <div id="navigationTabs">
    <div>
        <p :class="{selected: tabSelected == 'FridgeTab'}" @click="changeTabSelected('FridgeTab')">Geladeira</p>
    </div>
    <div class="divider"></div>
    <div>
        <p :class="{selected: tabSelected == 'RecepiesTab'}" @click="changeTabSelected('RecepiesTab')" >Receitas</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          tabSelected: 'FridgeTab'
        }
    },
    methods: {
      changeTabSelected(tab) {
        this.tabSelected = tab;
        this.$emit('tabSelectedChanged', tab)
      }
    }
}
</script>

<style scoped>
  #navigationTabs {
    background-color: #789DBC ;
    width: 100%;
    height: 4rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
  }
  .divider {
    width: 1px;
    background-color: black ;
    height: 50%;
  }
  p {
    /* height: 100%; */
    padding: 1rem
  }
  p:hover {
    background-color: rgba(196, 225, 246,0.3);
    cursor: pointer;
  }
  .selected {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
</style>