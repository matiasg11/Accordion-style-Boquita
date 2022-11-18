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
const skipButtons = player.querySelectorAll('[data-skip]');

const ranges = player.querySelectorAll('.player__slider')
/*Build the functions*/

function togglePlay(){
    if (video.paused){
        video.play();
        console.log("Play")
    }else{
        video.pause()
        console.log("Pause")
    }
}

function updateButton(){
    const playPauseIcon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = playPauseIcon
}

function skip(){
    console.log(`Skip: ${this.dataset.skip}`) //Because it is explicitly assigned in the data-skip value
    video.currentTime += parseFloat(this.dataset.skip)
    
}

function handleRangeUpdate(){ //It works for both volume and speed
    video[this.name] = this.value
    console.log(this.name, this.value)
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.flexBasis = `${percent}%`
}


function scrub(event){
    const scrubTime = (event.offsetX / progress.offsetWidth)*video.duration
    video.currentTime = scrubTime
    console.log(event)
}


/*Hook up the event listeners*/

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
//ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress)


let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event))
progress.addEventListener('mousedown', () => mousedown = true ) 
progress.addEventListener('mouseup', () => mousedown = false ) 
