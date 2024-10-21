<template>
    <div id="recepies-prompt">
        <div class="prompt-container">
            <h1>Gere receitas apartir de itens da sua geladeira</h1>
            <ToggleSwitch  v-for="(option, index) in extraOptions" :key="index" :falseOption="option[0]" :trueOption="option[1]"></ToggleSwitch>
            <button>Gerar receitas✨</button>
        </div>
    </div>
</template>

<script>
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