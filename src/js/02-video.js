import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// player.on('play', onPlay);

// function onPlay() {
//   console.log('played the video!');
// }

player.on('timeupdate', throttle(ontimeupdate, 1000));
function ontimeupdate(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
  console.log(localStorage.getItem('videoplayer-current-time'));
}

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
