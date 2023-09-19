<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reiciendis alias explicabo obcaecati nesciunt, quae praesentium aut, amet modi repellendus at similique esse corporis soluta quis consectetur nobis. Quidem, nostrum!</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=mario', {
    method: "post",
    body: { age: 30 }
})
</script>

<style scoped>

</style>