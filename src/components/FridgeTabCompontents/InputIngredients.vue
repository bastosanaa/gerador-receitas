<template>
    <div id="inputIngredients">
        <h2>Adicione novos ingredientes a sua geladeira</h2>
        <img src="@/assets/fridge.png" alt="">
        <input type="text">
        <button>Adicionar</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #inputIngredients {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
        width: 50%;
        height: 100%;
    }
    input {
        padding: 0.5rem;
        width: 240px;
        border-block-color: var();
    }


</style>