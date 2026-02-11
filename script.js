const musica = document.getElementById("musica");
let musicaIniciada = false;

/* 🎵 reproducir música al PRIMER clic en pantalla */
document.addEventListener("click", () => {
    if(!musicaIniciada){
        musica.play();
        musicaIniciada = true;
    }
});

function aceptar(){
    const corazon = document.getElementById("corazon");
    const botones = document.getElementById("botones");
    const final = document.getElementById("final");

    corazon.classList.add("abrir");
    botones.style.display = "none";

    setTimeout(()=>{
        final.classList.remove("oculto");
    },800);
}
