const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const fim = "1 Sep 2022";


function formato(tempo){
    return tempo < 10 ? `0 ${tempo}` : tempo;

}

function contagem() {

    const endData = new Date(fim);
    const hojeData = new Date();

    const totalSegundos = (endData - hojeData) / 1000;
    
    const dias = Math.floor(totalSegundos / 86400 );
    const horas = Math.floor(totalSegundos / 3600 ) % 24; 
    const minutos = Math.floor(totalSegundos / 60 ) % 60; 
    const segundos = Math.floor(totalSegundos % 60 ); 

    diasEl.innerHTML = formato(dias) + " :";
    horasEl.innerHTML = formato(horas) + " :";
    minutosEl.innerHTML = formato(minutos) + " :";
    segundosEl.innerHTML = formato(segundos);

};

contagem();

setInterval(contagem, 1000);