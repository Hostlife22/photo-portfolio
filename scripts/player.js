// import { setItem, getIem } from './storage.js';

const video = document.querySelector('.video__player');
const controlBar = document.querySelector('.controls__beige');
const btn = document.querySelector('.controls__play-pause');
const mute = document.querySelector('.controls__volume-mute');
const range = document.querySelector('.controls__range');
const videoPlayElem = document.querySelector('.video__play');

function togglePlayPause() {
  if (video.paused) {
    btn.className = 'pause';
    videoPlayElem.style.display = 'none';
    video.play();
  } else {
    btn.className = 'play';
    videoPlayElem.style.display = 'flex';
    video.pause();
  }
}

const onChangePlay = () => {
  togglePlayPause();
};

const onChangeDuration = () => {
  const durationPosition = video.currentTime / video.duration;
  controlBar.style.width = durationPosition * 100 + '%';

  if (video.ended) {
    btn.className = 'play';
  }
};

const onChangeMute = () => {
  mute.classList.toggle('mute');

  video.muted = !video.muted;
  video.muted === true ? (range.value = 0) : (range.value = 80);
};

const onChangeVolume = event => {
  video.volume = event.target.value / 100;
};

export const initControls = () => {
  btn.addEventListener('click', onChangePlay);
  mute.addEventListener('click', onChangeMute);
  video.addEventListener('timeupdate', onChangeDuration);
  range.addEventListener('change', onChangeVolume);
  videoPlayElem.addEventListener('click', event => {
    if (!event.target.classList.contains('video__play-icon')) {
      return;
    }
    togglePlayPause();
  });
};
