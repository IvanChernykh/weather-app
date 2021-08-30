import { useState } from "react";
import { api } from "../api/api";
import NotFound from "./NotFound";
import SearchInput from "./SearchInput";
import WeatherInfo from "./WeatherInfo";

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState('')
  const [responseCode, setResponseCode] = useState('')
  const onSearch = event => {
    if (event.key === 'Enter' && query) {
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
  return (
    <div className='app'>
      <div className='app__inner'>
        <SearchInput searchHandler={onSearch} inputValue={query} setQuery={setQuery} />
        {responseCode === 200 && weather
          ? <WeatherInfo weatherInfo={weather} />
          : responseCode === 404
            ? <NotFound />
            : ''}
      </div>
    </div>
  );
}
export default App;
