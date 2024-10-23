<template>
    <div id="recepies-tab">
        <RecepiesPrompt></RecepiesPrompt>
    </div>
</template>

<script>
import RecepiesPrompt from '../RecepiesTabComponents/RecepiesPrompt.vue';
export default {
    components: {
        RecepiesPrompt
    }
}
</script>

<style>
    #recepies-tab {
        width: 100%;
        height: 100%;
    }
</style>