const base_url = "https://api.openweathermap.org/data/2.5/weather";
const key = "0b2c8093e89b6774300e2618aa159b3e";



const callback = () => {
    const inp = document.querySelector("#search").value;

  axios
    .get(`${base_url}?q=${inp}&appid=${key}&units=metric`)
    .then((response) => {

    console.log(response.data);
    response.data;
    resData(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
};
const currentDate = new Date().toLocaleDateString();
// console.log(currentDate);


const resData = (value) =>{
    const main = document.getElementById("main");
    main.innerHTML = `<div>
    <div class="left">
        <div class="name">${value.name}</div>
        <div class="date">${currentDate}</div>
        <p>${value.sys.country}</p>
    </div>
</div>
<div class="center">
    <div class="temperature">${value.main.temp}</div>
    <div class="img"><img src="https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png" alt=""></div>
    <div class="temperature">${value.weather[0].description}</div>

</div>
<div class="right">
    <label class="text">Humidity</label>
    <div class="humidity">${value.main.humidity}</div>
    <label class="text">Air Pressure</label>
    <div class="Pressure">${value.main.pressure}</div>
    <label class="text">Wind Speed</label>
    <div class="Wind">${value.wind.speed}</div>
</div>`
}



const document12 = document.querySelector("form");
document12.addEventListener("submit", function(event){
    callback();
    event.preventDefault();
});



