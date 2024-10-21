<template>
    <div id="containerIngredients">
        <p :style="{fontSize: '1.5rem', }">Seus ingredientes:</p>
        <ul>
            <ItemIngredient @remove="removeItem" v-for="(item, index) in ingredients" :key="index" :ingredient="item"></ItemIngredient>
        </ul>
    </div>
</template>

<script>
import { EventBus } from '@/eventBus';
import ItemIngredient from './ItemIngredient.vue';

export default {
    components: {
        ItemIngredient
    },
    data() {
        return {
            ingredients : []
        }
    },
    mounted() {
        EventBus.$on('newIngredient', ingredient => {
            this.ingredients.push(ingredient)
            localStorage.setItem('ingredients', JSON.stringify(this.ingredients))
        })
        
        const storedIngredients = localStorage.getItem('ingredients')
        if (storedIngredients) {
            this.ingredients = JSON.parse(storedIngredients)
        }
    },
    methods: {
        removeItem(item) {
            
            this.ingredients = this.ingredients.filter(i => i != item);
            localStorage.setItem('ingredients', JSON.stringify(this.ingredients))
        }
    }
}
</script>

<style>
    #containerIngredients {
        padding: 1rem;
        width: 50%;
        box-sizing: border-box;
    }

    ul {
        display: flex;
        gap: 1rem;
        overflow: hidden;
        width: 100%;
        /* border: 1px solid black; */
    }
</style>