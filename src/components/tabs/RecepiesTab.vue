<template>
    <div id="recepies-tab">
        <RecepiesPrompt v-show="currentRecepie==''" @recepieGenerated="handleRecepieGenerated"></RecepiesPrompt>
        <keep-alive>
            <RecepiesInstructions v-if="currentRecepie != ''" @recepieClosed="handleRecepieClosed" :instructions="currentRecepie"></RecepiesInstructions>
        </keep-alive>

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
    computed: {
        currentRecepie() {
            return this.$store.state.currentRecepie;
        }
    },
    methods: {
        handleRecepieGenerated(recepie) {
            this.$store.commit('setCurrentRecepie', recepie)
        },
        handleRecepieClosed() {
            this.$store.commit('clearCurrentRecepie');
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