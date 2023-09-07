const apiKey = "7b2d791b75b79ee83aab7a77f5ba839e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");

// const searchBox = document.getElementById("cityName");
// const searchBtn = document.getElementById("searchBtn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + "kmph";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
