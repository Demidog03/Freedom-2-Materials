const cityElement = document.getElementById('cityElement')
const timeElement = document.getElementById('timeElement')
const weatherIconElement = document.getElementById('weatherIconElement')
const weatherNameElement = document.getElementById('weatherNameElement')
const weatherCelciusElement = document.getElementById('weatherCelciusElement')
const speedElement = document.getElementById('speedElement')
const futureWeatherItemTemplate = document.getElementById('futureWeatherItemTemplate')
const futureWeatherContainer = document.getElementById('futureWeatherContainer')

async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?' + new URLSearchParams({
            q: 'Yakutsk',
            appid: 'a94d0a5ac08570add4b47b8da933f247',
            units: 'metric',
        }), {
            method: 'GET'
        })
        const data = await response.json()
        return data // Promise
    }
    catch(err) {
        console.error(err);
    }
}

async function init() {
    const weatherData = await fetchWeather()    
    cityElement.innerHTML = weatherData.city.name
    timeElement.innerHTML = getTimeByTimezone(weatherData.city.timezone)

    const icon = weatherData.list[0].weather[0].icon
    const iconImg = document.createElement('img') // <img src="" alt=""/>
    iconImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png` // <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt=""/>
    weatherIconElement.innerHTML = ''
    weatherIconElement.appendChild(iconImg)

    weatherNameElement.innerHTML = weatherData.list[0].weather[0].main
    weatherCelciusElement.innerHTML = `${Math.round(weatherData.list[0].main.temp)} &#8451`
    
    speedElement.innerHTML = `${weatherData.list[0].wind.speed} m/s`

    for(let i = 0; i < weatherData.list.length; i+=8) {
        const item = weatherData.list[i]
        const template = futureWeatherItemTemplate.content.cloneNode(true)
        const futureWeatherItemDiv = template.getElementById('featureWeatherItem')

        const dateElement = template.getElementById('futureDate')
        const timeElement = template.getElementById('futureTime')
        const iconElement = template.getElementById('futureIcon')
        const celciusElement = template.getElementById('futureCelcius')

        dateElement.innerHTML = item.dt_txt.split(' ')[0]
        timeElement.innerHTML = item.dt_txt.split(' ')[1]
        iconElement.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
        celciusElement.innerHTML = `${Math.round(item.main.temp)} &#8451`

        futureWeatherContainer.appendChild(futureWeatherItemDiv)
    }
}

function getTimeByTimezone(timezone) {
    const date = new Date();
    const utcTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const targetTime = utcTime + (timezone * 1000) + localOffset;
    const hours = new Date(targetTime).getHours();
    let minutes = new Date(targetTime).getMinutes();

    if(minutes < 10) { // 0 -> 00, 5 -> 05, 9 -> 09
        minutes = '0' + minutes
    }

    return `${hours}:${minutes}` //19:59
}

init()