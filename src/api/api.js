export const api = {
    apiKey: 'c54145c5fc3b4b04af2e8c7518554123',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
    fetch(query, setQuery, setResponseCode, setWeather) {
        fetch(`${api.base}q=${query}&units=metric&appid=${api.apiKey}`)
            .then(response => response.json())
            .then(result => {
                if (result.cod === '404') {
                    setResponseCode(404)
                } else {
                    setResponseCode(200)
                    setWeather(result)
                    setQuery('')
                }
            })
    }
}