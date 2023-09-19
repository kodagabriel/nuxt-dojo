<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooooops.</p>
        <p class="m-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Go home... you're drunk</button>
    </div>
</template>

<script setup>
    defineProps(["error"])

    const handleClearError = () => { clearError({ redirect: "/" })}
</script>

<style scoped>

</style>