<template>
    <div id="fridgeTab">
        <InputIngredients></InputIngredients>
    </div>
</template>

<script>
import InputIngredients from '@/components/FridgeTabCompontents/InputIngredients.vue'

export default {
    components: {
        InputIngredients
    }
}
</script>

<style>
    #fridgeTab{
        height: 100%;

    }
</style>