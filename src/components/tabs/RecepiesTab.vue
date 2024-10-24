<template>
    <div id="recepies-tab">
        <RecepiesPrompt v-show="currentRecepie==''" @recepieGenerated="handleRecepieGenerated"></RecepiesPrompt>
        <RecepiesInstructions v-if="currentRecepie != ''" @recepieClosed="handleRecepieClosed" :instructions="currentRecepie"></RecepiesInstructions>

    </div>
</template>

<script>
import RecepiesPrompt from '../RecepiesTabComponents/RecepiesPrompt.vue';
import RecepiesInstructions from '../RecepiesTabComponents/RecepiesInstructions.vue';
export default {
    components: {
        RecepiesPrompt,
        RecepiesInstructions
    },
    data() {
        return {
            currentRecepie: ''
        }
    },
    methods: {
        handleRecepieGenerated(recepie) {
            this.currentRecepie = recepie
        },
        handleRecepieClosed() {
            this.currentRecepie = ''
        }
    }
}
</script>

<style>
    #recepies-tab {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>