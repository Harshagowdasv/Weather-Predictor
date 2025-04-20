const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const wheatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);


    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
       
    }else{

    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "℃";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        wheatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        wheatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        wheatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzel"){
        wheatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        wheatherIcon.src="images/haze.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

}

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);


})