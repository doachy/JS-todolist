const COORDS = 'coords';

function saveCoords(coordsObj){
	 
}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	console.log(position);
}

function handleGeoError(){
	console.log('cant access geolocation');
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	} else{
		//  getWeather
	}
}

function init(){
	loadCoords();
}

init();