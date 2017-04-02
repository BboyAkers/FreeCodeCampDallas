console.clear();
//creating the request to send the server
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	//4 means we recieved the response
	if(xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText);
    document.querySelector('#temp').innerHTML = data.main.temp;
    
    
    document.querySelector('#temp').innerHTML = data.main.temp;
    
    
		document.getElementById('ajax').innerHTML = JSON.stringify(data, null, 4);
	}
};
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=75093&appid=b0cc9ed54981357f6dd3594db340516e');
xhr.send();

console.log(xhr);