import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ingredients: [],  // Estado inicial com os ingredientes
        currentRecepie: ''
    },
    mutations: {
    //ingredients mutations
    addIngredient(state, ingredient) {
        console.log(state.ingredients);
        
        state.ingredients.push(ingredient); 
        localStorage.setItem('ingredients', JSON.stringify(state.ingredients));

    },
    removeIngredient(state, ingredient) {
        const index = state.ingredients.indexOf(ingredient);
        if (index !== -1) {
            state.ingredients.splice(index, 1);
            localStorage.setItem('ingredients', JSON.stringify(state.ingredients));

        }
    },
    setIngredients(state, ingredients) {
        state.ingredients = ingredients;
        localStorage.setItem('ingredients', JSON.stringify(state.ingredients));  // Atualiza localStorage
    },
    //current recepie mutations
    setCurrentRecepie(state, recepie) {
        state.currentRecepie = recepie;
    },
    clearCurrentRecepie(state) {
        state.currentRecepie = ''
    }
    },
    actions: {
    addIngredient({ commit }, ingredient) {
        commit('addIngredient', ingredient);
    },
    removeIngredient({ commit }, ingredient) {
        commit('removeIngredient', ingredient);
    },
    setIngredients({ commit }, ingredients) {
        commit('setIngredients', ingredients);
    },
    loadIngredients({ commit }) {
        const storedIngredients = localStorage.getItem('ingredients');
        if (storedIngredients) {
            commit('setIngredients', JSON.parse(storedIngredients));
        }
    }
    },
    getters: {
    allIngredients: (state) => state.ingredients
    }
});