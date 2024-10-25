<template>
    <div id="instructions">
        <img src="@/assets/close.svg" @click="closeRecepie" :style="{width: '24px', position: 'absolute', left: '10px', top:'10px', cursor:'pointer'}" alt="">
        <div class="header">
            <h1>{{ instructions.name }}</h1>
            <p>{{ instructions.description }}</p>
        </div>
        <div class="ingredients">
            <p class="subtitle">Ingredientes:</p>
            <ul>
                <li v-for="(ingredient, i) in instructions.ingredients" :key="i">{{ ingredient.name }} - {{ ingredient.quantity }}</li>
            </ul>
        </div>
        <div class="steps">
            <p class="subtitle">Instruções:</p>
            <ul>
                <li v-for="(step, i) in instructions.steps" :key="i"><span>Passo {{i+1}} -  </span>{{ step }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        instructions: {
            type: Object
        }
    },
    created() {
        console.log(this.instructions);
        
    },
    methods: {
        closeRecepie() {
            this.$emit('recepieClosed')
        }
    }
}
</script>

<style scoped>
    #instructions {
        position: relative;
        background-color: #fff;
        width: 90%;
        height: 85%;
        padding: 2rem 3rem;
        border-radius: 16px;
        overflow-y: scroll;
        
    }

    .header h1{
        font-size: 1.8rem;
        margin: 0;
    }
    .header p {

    }
    .subtitle {
        font-size: 1.325rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    ul {
        
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    @media only screen and (max-width: 720px) {
        #instructions {
            padding: 2.5rem 1.5rem;
        }
        ul {
            padding: 1.2rem;
        }
    }
    
</style>