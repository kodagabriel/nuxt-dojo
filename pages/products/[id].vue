<template>
    <div>
        <p>Produt details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum esse, labore incidunt expedita ad blanditiis provident quibusdam quam odio voluptatum veritatis. Non dolores quod recusandae rerum aliquam laborum neque!</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style>

</style>