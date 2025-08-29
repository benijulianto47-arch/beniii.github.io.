const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');

function togglePlay(){
  if(audio.paused){
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '▶';
  }
}

playBtn.addEventListener('click', togglePlay);
