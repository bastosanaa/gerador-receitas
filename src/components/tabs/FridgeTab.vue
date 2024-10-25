<template>
    <div id="fridgeTab">
        <InputIngredients></InputIngredients>
        <ContainerIngredients></ContainerIngredients>
    </div>
</template>

<script>
import InputIngredients from '@/components/FridgeTabCompontents/InputIngredients.vue'
import ContainerIngredients from '../FridgeTabCompontents/ContainerIngredients.vue';

export default {
    components: {
        InputIngredients,
        ContainerIngredients
    }
}
</script>

<style>
    #fridgeTab{
        height: 100%;
        display: flex;
    }

    @media only screen and (max-width: 720px) {
        #fridgeTab {
            flex-direction: column;
            align-items: center;
            overflow-y:  auto;
        }
    }

</style>