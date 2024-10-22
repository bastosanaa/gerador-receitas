<template>
    <div id="recepies-prompt">
        <div class="prompt-container">
            <h1>Gere receitas apartir de itens da sua geladeira</h1>
            <ToggleSwitch  v-for="(option, index) in extraOptions" :key="index" :falseOption="option[0]" :trueOption="option[1]"></ToggleSwitch>
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
            extraOptions: [
                ['salgado', 'doce'],
                ['não vegetariano', 'vegetariano']
            ]
        }
    },
    methods: {
        async generateRecepies() {
            try {
                console.log(await generateText())
            } catch {
                console.log('erro ao gerar codigo');
                
            }
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
}

button {
    padding: 1rem;
    font-size: 1.5rem;

}
</style>