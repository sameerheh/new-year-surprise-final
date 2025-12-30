const music = document.getElementById("bgMusic");

if (music) {
  music.volume = 0.15;

  const wasPlaying = localStorage.getItem("musicPlaying") === "true";
  const savedTime = localStorage.getItem("musicTime");

  if (savedTime) music.currentTime = parseFloat(savedTime);

  if (wasPlaying) {
    document.addEventListener("click", () => {
      music.play().catch(()=>{});
    }, { once:true });
  }

  music.addEventListener("timeupdate", () => {
    localStorage.setItem("musicTime", music.currentTime);
  });

  music.addEventListener("play", () => {
    localStorage.setItem("musicPlaying","true");
  });

  music.addEventListener("pause", () => {
    localStorage.setItem("musicPlaying","false");
  });
}

function startMusicAndGo(page){
  if(music){
    music.play().catch(()=>{});
  }
  localStorage.setItem("musicPlaying","true");
  window.location.href = page;
}

function goPage(page){
  window.location.href = page;
}
