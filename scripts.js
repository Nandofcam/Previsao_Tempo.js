const key = "98a24d9545e205c91489c385281d316c"


function buttonClick () {
    const city = document.querySelector(".city-input").value

    searchCity(city)
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        buttonClick()
    }
})

async function searchCity (city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json())

    screenData(data)
}

function screenData (data) {
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(data.main.temp) + "ºC | Sensação térmica: " + Math.floor(data.main.feels_like) + "ºC"
    document.querySelector(".forecast-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".forecast-text").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".city-input").value = ""
}