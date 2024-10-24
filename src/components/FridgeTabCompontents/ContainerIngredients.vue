<template>
    <div id="containerIngredients">
        <p :style="{fontSize: '1.5rem', }">Seus ingredientes:</p>
        <ul>
            <ItemIngredient v-for="(ingredient, index) in ingredients" :key="index" :ingredient="ingredient"></ItemIngredient>
        </ul>
    </div>
</template>

<script>
// import { EventBus } from '@/eventBus';
import ItemIngredient from './ItemIngredient.vue';

export default {
    components: {
        ItemIngredient
    },
    computed: {
        ingredients() {
            return this.$store.getters.allIngredients;
        }
    },
    created() {
        this.$store.dispatch('loadIngredients');
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
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        overflow-x: auto;
        overflow-y: auto;
        /* border: 1px solid red; */
        flex-wrap: wrap;
}
</style>