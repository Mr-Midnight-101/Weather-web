const apiKey = "deff1857e9444963ac928fa401b10e0a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric";

const city = document.getElementById("search");
const btn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("W-icon")


async function getWeatherData(city) {
  const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
  var data = await response.json();
  if (response.status==404){
    document.querySelector()
  }
  console.log(data);
  // return data;
  document.querySelector("#location").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp);
  document.getElementById("humidity-value").innerHTML = data.main.humidity;
  document.getElementById("wind-speed").innerHTML = data.wind.speed;
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./Assets/cloud.svg";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "./Assets/clear.svg";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./Assets/rainy.svg";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "./Assets/dizzle.svg";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./Assets/Mist.svg";
  }
}
getWeatherData(document.querySelector("#location").innerHTML);

btn.addEventListener("click", () => {
  getWeatherData(city.value);
});