<template>
    <div id="inputIngredients">
        <h2>Adicione novos ingredientes a sua geladeira</h2>
        <img src="@/assets/fridge.png" alt="">
        <div>
            <input type="text" v-model="newIngredient">
            <button @click="addNewIngredient">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newIngredient: ''
        }
    },
    methods: {
        addNewIngredient() { 
            if (this.newIngredient) {                
                this.$store.dispatch('addIngredient', this.newIngredient)
            }
        } 
    }
}
</script>

<style scoped>
    #inputIngredients {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
        width: 50%;
        height: 100%;
    }
    input {
        padding: 0.5rem;
        width: 240px;
        border-block-color: var();
    }

    button {
        padding: 0.5rem;
        font-weight: 600;
    }


</style>