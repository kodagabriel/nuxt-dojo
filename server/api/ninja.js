export default defineEventHandler( async (event) => {

    const { data } = await $fetch("https://api.currencyapi.com/v3/currencies", {
        headers: {
            apikey: '*'
        }
    })

    return data
})