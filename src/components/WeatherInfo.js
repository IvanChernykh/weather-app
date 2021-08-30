export default function WeatherInfo({ weatherInfo }) {
    const dateBuilder = d => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Ocober', 'December']
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    }
    return (
        <div className='weather-info'>
            <div className='location-box'>
                <span className='location'>{weatherInfo.name}, {weatherInfo.sys.country}</span>
                <span className='date'>{dateBuilder(new Date())}</span>
            </div>
            <div className='weather-box'>
                <span className='temperature'>{Math.round(weatherInfo.main.temp)}°</span>
                <span className='weather'>{weatherInfo.weather[0].main}</span>
            </div>
        </div>
    )
}