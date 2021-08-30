export default function WeatherInfo({ weatherInfo }) {
    return (
        <div className='weather-info'>
            <div className='location-box'>
                <span className='location'>{weatherInfo.name}, {weatherInfo.sys.country}</span>
                <span className='date'>{new Date().toDateString()}</span>
            </div>
            <div className='weather-box'>
                <span className='temperature'>{Math.round(weatherInfo.main.temp)}°</span>
                <span className='weather'>{weatherInfo.weather[0].main}</span>
            </div>
        </div>
    )
}