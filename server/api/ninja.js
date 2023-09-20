export default defineEventHandler( async (event) => {

    const { currencyKey } = useRuntimeConfig()

    const { data } = await $fetch("https://api.currencyapi.com/v3/currencies", {
        headers: {
            apikey: currencyKey
        }
    })

    return data
})