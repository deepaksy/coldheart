const toggleSwitch = document.querySelector('.switch-theme');
var time = new Date();
var getHour = time.getHours();
if(getHour>20){
  document.documentElement.setAttribute('data-theme','dark');
}
function switchTheme() {
    if (localStorage.getItem('theme')=='light') {
        document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');

    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
      
      localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('click', switchTheme);
const musicPlayer = document.querySelector("#music-main");
musicPlayer.src="ColdHeart.mp3";
function playSong(){
  var musicState =  musicPlayer.paused;
  if(musicState){
    musicPlayer.play();
    document.getElementById('play').innerHTML='<i  class="fas fa-pause"></i>';
  }
  else{
    musicPlayer.pause();
    document.getElementById('play').innerHTML='<i  class="fas fa-play"></i>';
  }
}

document.getElementById("play").addEventListener('click',playSong);

document.querySelector('#song-name').innerHTML="Cold Heart";


let mediaSession = navigator.mediaSession;

if("mediaSession" in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title : "Cold Heart",
    artist : "Elton John, Dua Lipa",
    album : "PAUN Remix",
    artwork: [{src: "music-banner.jpg"}]
  })
}

navigator.mediaSession.setActionHandler('play',musicPlayer.play());
navigator.mediaSession.setActionHandler('pause',musicPlayer.pause());
navigator.mediaSession.setActionHandler('seekbackward',musicPlayer.fastSeek(-20));
navigator.mediaSession.setActionHandler('seekforward',musicPlayer.fastSeek(20));
