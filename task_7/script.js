const video = document.querySelector('.video-player__video');
const timeSlider = document.querySelector('.video-player__time-slider');
const timeText = document.querySelector('.video-player__time-text');
const volume = document.querySelector('.video-player__volume-slider');
const button = document.querySelector('.video-player__play-pause-button');

window.addEventListener(
	'load',
	() => (timeText.innerText = `00 / ${Math.round(video.duration)}`)
);

button.addEventListener('click', (event) => {
	if (video.paused) {
		video.play();
		event.target.classList.remove('bi-play-circle');
		event.target.classList.add('bi-pause-circle');
	} else {
		video.pause();
		event.target.classList.remove('bi-pause-circle');
		event.target.classList.add('bi-play-circle');
	}
});

video.addEventListener('click', (event) => {
	if (event.target.paused) {
		event.target.play();
		button.classList.remove('bi-play-circle');
		button.classList.add('bi-pause-circle');
	} else {
		event.target.pause();
		button.classList.remove('bi-pause-circle');
		button.classList.add('bi-play-circle');
	}
});

video.addEventListener('timeupdate', (event) => {
	timeSlider.value = Math.round(
		(event.target.currentTime / event.target.duration) * 100
	);
	timeText.innerText = `${Math.round(event.target.currentTime)} / ${Math.round(event.target.duration)}`;
});

timeSlider.addEventListener(
	'change',
	(event) => (video.currentTime = (event.target.value / 100) * video.duration)
);

video.addEventListener(
	'loadeddata',
	(event) => (volume.value = event.target.volume * 100)
);

volume.addEventListener('change', (event) => {
	video.volume = event.target.value / 100;
});

document
	.querySelector('.video-player__speed-menu')
	.addEventListener(
		'click',
		(event) => (video.playbackRate = event.target.innerText.slice(0, -1))
	);

video.addEventListener('ended', () => {
	console.log('Воспроизведение завершено');
	button.classList.remove('bi-pause-circle');
	button.classList.add('bi-play-circle');
});
