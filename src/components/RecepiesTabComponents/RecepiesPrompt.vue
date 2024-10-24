<template>
    <div id="recepies-prompt">
        <div class="prompt-container">
            <h1>Gere receitas apartir de itens da sua geladeira</h1>
            <ToggleSwitch :falseOption="'não vegetariano'" @toggle="handleIsVeg" :trueOption="'vegetariano'"></ToggleSwitch>
            <ToggleSwitch :falseOption="'salgado'" @toggle="handleIsSweet" :trueOption="'doce'"></ToggleSwitch>
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

            const fridge = this.$store.getters.allIngredients            

            const veg = this.isVeg ? 'vegetariano' : 'não vegetariano'
            const category = this.isSweet ? 'doce' : 'salgado'
            
            const prompt = `me sugira uma receita fácil ${veg} e ${category}, usando APENAS e UNICAMENTE (mas nao todos necessariamente), os ingredientes: ${fridge.join(', ')}, me de a saida em formato json exatamente nesse formato: {
                "name": "nome da receita",
                "description": "descricao breve da receita",
                "ingredients": [
                    {
                        "name": "nome do ingrediente",
                        "quantity": "quantidade do ingrediente na receita"
                    }
                ],
                "steps" : [
                    "step", "step", ...
                ]
            },
            me envie apenas o json, sem caracteres extras
            `
            
            try {
                const generatedText = await generateText(prompt)
                const data = JSON.parse(generatedText)
                
                this.$emit('recepieGenerated', data )
                
            } catch(erro) {
                console.log(erro);
                
            }
        },
        handleIsVeg() {
            this.isVeg = !this.isVeg
        },
        handleIsSweet() {
            this.isSweet = !this.isSweet
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
    cursor: pointer;
    border-radius: 6px;
    border: none ;
    background-color: #789DBC;

}
</style>