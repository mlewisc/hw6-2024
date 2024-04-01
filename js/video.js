const videoElem = document.querySelector('#player1');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const volumeElem = document.querySelector('#volume');
const slowdownButton = document.querySelector('#slower');
const speedupButton = document.querySelector('#faster');
const skipButton = document.querySelector('#skip');
const muteButton = document.querySelector('#mute');
const slider = document.querySelector('#slider');
const oldButton = document.querySelector('#vintage');
const originalButton = document.querySelector('#orig');

let videoDuration;
let currentSpeed;
let newSpeed;

videoElem.onloadedmetadata = () => {
	videoDuration = videoElem.duration;
}
 
skipButton.addEventListener('click', () => {
	let currentTime = videoElem.currentTime;
	let newTime = currentTime + 10;

	if(newTime < videoDuration) {
		videoElem.currentTime = newTime;
	} else {
		newTime = 0;
		videoElem.currentTime = newTime;
	}

	console.log(`The current video location is ${newTime}`);
});

window.addEventListener('load', () => {
	videoElem.removeAttribute('autoplay');
	videoElem.removeAttribute('preload');
	videoElem.setAttribute('loop', false);
});



playButton.addEventListener("click", () => {
	videoElem.play();
	volumeElem.innerHTML = `${document.querySelector('#slider').value}%`;
});

pauseButton.addEventListener('click', () => {
	videoElem.pause();
});

slowdownButton.addEventListener('click', () => {
	currentSpeed = videoElem.playbackRate;
	newSpeed = currentSpeed - 0.1;
	videoElem.playbackRate = newSpeed;
	console.log(`Slowing down... The video speed is ${newSpeed}`);
});

speedupButton.addEventListener('click', () => {
	currentSpeed = videoElem.playbackRate;
	newSpeed = currentSpeed + 0.1;
	videoElem.playbackRate = newSpeed;
	console.log(`Speeding up... The video speed is ${newSpeed}`);
});

muteButton.addEventListener('click', () => {
	if(muteButton.innerHTML === 'Mute') {
		muteButton.innerHTML = 'Unmute';
		videoElem.muted = true;
	} else {
		muteButton.innerHTML = 'Mute';
		videoElem.muted = false;
	}
});

slider.addEventListener('change', () => {
	volumeElem.innerHTML = `${slider.value}%`;
	videoElem.volume = slider.value / 100; 
});

oldButton.addEventListener('click', () => {
	videoElem.classList.add('oldSchool');
});

originalButton.addEventListener('click', () => {
	videoElem.classList.remove('oldSchool');
});

