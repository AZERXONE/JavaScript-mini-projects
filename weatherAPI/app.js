const city_name = document.getElementById("city_name")
const current_temp = document.getElementById("current_temp")
const humidity = document.getElementById("humidity")
const weather = document.getElementById("weather")
const image = document.getElementById("image")
const main = document.getElementById("siz")

const user_input = document.getElementById("input_data")

const apikey = "e8a1d4ea3750a017137f0691273042dc"

let im

current_temp.style.display = "none"
city_name.style.display = "none"
humidity.style.display = "none"
weather.style.display = "none"
image.style.display = "none"

async function fetchdata(){
    try{
        let user = user_input.value.toLowerCase()

        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=${apikey}`)
    
        let findata = await data.json()
    
        console.log(findata)

        let datas = {
            name: findata.name,
            desc: findata.weather[0].description,
            humidity: findata.main.humidity,
            temperature: findata.main.temp
        }
    
        city_name.textContent = datas.name
        current_temp.textContent = `Temperature: ${(datas.temperature - 273.15).toFixed(2)}°C`
        humidity.textContent = `Humidity: ${datas.humidity}`
        weather.textContent = `Weather: ${datas.desc}`
    
        image.src = weathericon(findata.weather[0].id)

        current_temp.style.display = "block"
        city_name.style.display = "block"
        humidity.style.display = "block"
        weather.style.display = "block"
        image.style.display = "inline-block"
    }
    catch(error){
        alert(error)
    }

}

function weathericon(id){
    im = ""
    if(id >= 200 && id < 300){
        im = "storm.png"
    }
    else if(id >= 300 && id < 500){
        im = "rainy-day.png"
    }
    else if(id >= 500 && id < 600){
        im = "rainy-day.png"
    }
    else if(id >= 600 && id < 700){
        im = "snow.png"
    }
    else if(id >= 700 && id < 800){
        im = "wind.png"
    }
    else if(id == 800){
        im = "sun.png"
    }
    else {
        im = "cloud.png"
    }
    return im
}