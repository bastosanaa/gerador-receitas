<template>
    <div id="ItemIngredient">
        <p>{{ ingredient }}</p>
        <img src="@/assets/close.svg" alt="" @click="removeIngredient" :style="{width: '1.5rem', height: '1.5rem', cursor: 'pointer'}">
    </div>
</template>

<script>
export default {
    props: {
        ingredient: {
            type: String,
            required: true
        }
    },
    methods: {
        removeIngredient() {
            this.$store.dispatch('removeIngredient', this.ingredient);
        }
    }
}
</script>

<style>
    #ItemIngredient {
        padding: 0 0.5rem;
        font-size: 1rem;
        background-color: rgb(92, 138, 190);
        color: #f5f5f5;
        display: flex;
        align-items: center;
        border-radius: 6px;
        gap: 1rem;
    }

</style>