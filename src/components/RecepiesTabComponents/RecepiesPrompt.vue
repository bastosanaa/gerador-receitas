<template>
    <div id="recepies-prompt">
        <div class="prompt-container">
            <h1>Gere receitas apartir de itens da sua geladeira</h1>
            <ToggleSwitch :falseOption="'não vegetariano'" @toggle="handleToggle" :trueOption="'vegetariano'"></ToggleSwitch>
            <ToggleSwitch :falseOption="'salgado'" @toggle="handleToggle('isSweet')" :trueOption="'doce'"></ToggleSwitch>
            <button @click="generateRecepies">Gerar receitas✨</button>
        </div>
    </div>
</template>

<script>
import { generateText } from '@/text_generation';
import ToggleSwitch from '../widgets/ToggleSwitch.vue';
export default {
    components: {
        ToggleSwitch
    },
    data() {
        return {
            isVeg: false,
            isSweet: false
        }
    },
    methods: {
        async generateRecepies() {

            const veg = this.isVeg ? 'vegetariano' : 'não vegetariano'
            const category = this.isSweet ? 'doce' : 'salgado'
            
            const prompt = `me sugira uma receita fácil ${veg} e ${category}`
            console.log(prompt);
            
            try {
                console.log(await generateText(prompt))
            } catch {
                console.log('erro ao gerar codigo');
                
            }
        },
        handleToggle(varibleName) {
            this[varibleName] = !this[varibleName]
        }
    }
}
</script>

<style scoped>
#recepies-prompt {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.prompt-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 3rem;
    border: 1px solid black;
    border-radius: 15px;
    background-color: #d8ecf8;
}

button {
    padding: 1rem;
    font-size: 1.5rem;

}
</style>