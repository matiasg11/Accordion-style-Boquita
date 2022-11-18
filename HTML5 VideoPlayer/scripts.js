/*<div class="player">
     <video class="player__video viewer" src="652333414.mp4"></video>

     <div class="player__controls">
       <div class="progress">
        <div class="progress__filled"></div>
       </div>
       <button class="player__button toggle" title="Toggle Play">►</button>
       <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
       <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
       <button data-skip="-10" class="player__button">« 10s</button>
       <button data-skip="25" class="player__button">25s »</button>
     </div>
   </div>*/

/*Get the elements*/

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const volume = player.querySelector('.volume')
const skipButtons = player.querySelectorAll([data-skip])
const ranges = player.querySelectorAll('.player__slider')
/*Build the functions*/

function togglePlay(){
    if (video.paused){
        video.play();
    }else{
        video.pause()
    }
}



/*Hook up the event listeners*/