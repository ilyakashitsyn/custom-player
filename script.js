'strict mode';

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Volume
const volume = document.getElementById('volume');

// Play & pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

// Update Progress && Timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 0) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 0) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`;
};

// Set Video time to progress
const setVideoProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100;
};

// Stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// Volume update
const updateVolume = () => {
  video.volume = volume.value;
};

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
volume.addEventListener('input', updateVolume);
