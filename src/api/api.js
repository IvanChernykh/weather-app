export const api = {
    apiKey: process.env.REACT_APP_API_KEY,
    base: process.env.REACT_APP_BASE_URL,
    fetch(query, setQuery, setResponseCode, setWeather) {
        fetch(`${api.base}q=${query.trim()}&units=metric&appid=${api.apiKey}`)
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
