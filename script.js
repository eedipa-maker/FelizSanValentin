const music = document.getElementById("bgMusic");

function activarMusica(){
    music.muted = false;
    music.volume = 0.3;
    music.play();

    // Solo ejecutar una vez
    document.removeEventListener("click", activarMusica);
}

document.addEventListener("click", activarMusica);
