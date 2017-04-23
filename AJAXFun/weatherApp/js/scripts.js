console.clear();

function kelvinToAmerican (degreesKelvin) {
    return (9/5) * degreesKelvin - 459.67;
}

//creating the request to send the server
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    //4 means we recieved the response
    if (xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText);

        let temperature = kelvinToAmerican(data.main.temp);
        document.querySelector('#temp').innerHTML = temperature.toFixed(0);

        document.querySelector('#weather-main').innerHTML = data.weather[0].main;
        document.querySelector('#weather-details').innerHTML = data.weather[0].description;

        let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector('#weather-icon').src = icon;

        document.getElementById('ajax').innerHTML = JSON.stringify(data, null, 4);
    }
};
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=75093&appid=bcc318753fc77300a6a78da4d915f6bd');
xhr.send();

console.log(xhr);