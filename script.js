function abrir(){
    const heart = document.getElementById("heart");
    const contenido = document.getElementById("contenido");

    heart.classList.add("abrirCorazon");

    setTimeout(()=>{
        contenido.classList.add("mostrar");
    },900);
}
