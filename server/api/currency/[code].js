export default defineEventHandler(async (event) => {
    const { code } = event.context.params

    const { currencyKey } = useRuntimeConfig()

    const url = `https://api.currencyapi.com/v3/currencies?currencies=${code}`


    
    const { data } = await $fetch(url, {
        headers: {
            apikey: currencyKey
        }
    })

    return data

})