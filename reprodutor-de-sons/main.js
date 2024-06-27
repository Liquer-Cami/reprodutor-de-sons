function tocaSom(seletorAudio){
const elemento= document.querySelector(seletorAudio)
if (elemento && elemento.localName === "audio"){
        elemento.play()
    }
    else {
        alert("esse elemento nao existe");
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador= 0; contador < listaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador];
    const somTecla = teclas.classList[1];
    const audio = `#som_${somTecla}`
    teclas.onclick = function(){ tocaSom(audio)}
    
    teclas.onkeydown = function (event){
        if (event.code === "Enter"|| event.code === "Space"){
            teclas.classList.add("ativa");
        }
    }
    teclas.onkeyup = function( ){
        teclas.classList.remove("ativa")
    }}
    

