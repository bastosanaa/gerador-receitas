<template>
    <div id="inputIngredients">
        <div id="container">
            <h2>Adicione novos ingredientes <br> a sua geladeira</h2>
            <img src="@/assets/fridge.png" alt="">
            <div>
                <input type="text" v-model="newIngredient" placeholder="manteiga...">
                <button @click="addNewIngredient">+</button>
            </div>
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
        padding: 1rem;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0 0 10rem 0;

    }

    h2 {
        text-align: center;
        line-height: 2rem;
    }

    input {
        padding: 0.5rem;
        width: 240px;
        border-block-color: var();
        margin-top: 1rem;
    }

    button {
        padding: 0.5rem;
        font-weight: 600;
    }


</style>