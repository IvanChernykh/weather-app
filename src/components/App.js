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
    if (event.key === 'Enter' && query) api.fetch(query, setQuery, setResponseCode, setWeather)
  }
  function cls() {
    if (weather) {
      if (weather.main.temp >= 16) return 'app'
      if (weather.main.temp < 16 && weather.main.temp > 0) return 'app cold'
      if (weather.main.temp <= 0) return 'app very-cold'
    }
    return 'app'
  }
  return (
    <div className={cls()}>
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