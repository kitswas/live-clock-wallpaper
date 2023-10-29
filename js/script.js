//settings
let noClock = false;
let _12hour = true;
var mmddyy = true;

let clockEl = document.querySelector("#clock");
let timeEl = document.querySelector(".time");
let dateEl = document.querySelector(".date");
// clockEl.style.marginTop = `${timeEl.offsetHeight}px`;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(time, 1000);
time();

function time() {
	if (noClock) {
		timeEl.style.display = "none";
		dateEl.style.display = "none";
		return;
	}
	else {
		timeEl.style.display = "block";
		dateEl.style.display = "block";
	}
	let d = new Date();

	timeEl.innerHTML = getFormatedTime();

	if (mmddyy)
		dateEl.innerText = new Intl.DateTimeFormat('en-US', { 'month': 'short', 'day': '2-digit', 'year': '2-digit' }).format(d).replace(',', '').replace(/ /g, '/');
	else
		dateEl.innerText = new Intl.DateTimeFormat('en-GB', { 'day': '2-digit', 'month': '2-digit', 'year': '2-digit' }).format(d).replace(',', '').replace(/ /g, '/');

}

function getFormatedTime() {
	let d = new Date();
	if (_12hour)
		return new Intl.DateTimeFormat('en-US', { 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit', 'hour12': true }).format(d);

	return new Intl.DateTimeFormat('en-US', { 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit', 'hour12': false }).format(d);
}

const imageExtensions = ["jpg", "jpeg", "png", "webp"];

let backgroundElement = document.querySelector("#background");
let overlayElement = document.querySelector(".overlay");

function livelyPropertyListener(name, val) {
	switch (name) {
		case "xPos":
			overlayElement.style.left = `${val}%`;
			break;
		case "yPos":
			overlayElement.style.top = `${val}%`;
			break;
		case "overlayColor":
			overlayElement.style.backgroundColor = `${val}33`; // 20% opacity
			break;
		case "overlayOpacity":
			overlayElement.style.opacity = `${val}%`;
			break;
		case "mediaSelect":
			backgroundElement.style.backgroundImage = val;
			console.log(val);
			break;
	}
}

//helpers
function getExtension(filePath) {
	return filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length).toLowerCase() || filePath;
}
