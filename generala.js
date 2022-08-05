
let dado1 = document.getElementById('dado1');
let dado2 = document.getElementById('dado2');
let dado3 = document.getElementById('dado3');
let dado4 = document.getElementById('dado4');
let dado5 = document.getElementById('dado5');
let fijar1 = document.getElementById('fijar1');
let fijar2 = document.getElementById('fijar2');
let fijar3 = document.getElementById('fijar3');
let fijar4 = document.getElementById('fijar4');
let fijar5 = document.getElementById('fijar5');
let tirarDados = document.getElementById('tirarDados');
let conteo = document.getElementById('conteo');
let puntajeTotal = 0;


let valoresDados = [0, 0, 0, 0, 0];
let fijado = [false, false, false, false, false];
let tiros = 0;

let puntajes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calcularPuntajes() {
    // sumo los puntajes de los números
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            if (valoresDados[j] === i + 1) {
                puntajes[i] += (i + 1)
            }
        }
    }
    // calculo juegos
    for (let i = 0; i < 6; i++) {
        // generala
        if (puntajes[i] === (i + 1) * 5) {
            puntajes[9] = 50;
            if (document.getElementById('puntajeGenerala').innerHTML === '50') {
                puntajes[10] = 100;
            }
            // poker
        } else if (puntajes[i] === (i + 1) * 4) {
            if (tiros === 1) {
                puntajes[8] = 45;
            } else { puntajes[8] = 40; };
            // full    
        } else if (puntajes[i] === (i + 1) * 3) {
            for (k = 0; k < 6; k++) {
                if (puntajes[k] === (k + 1) * 2) {
                    if (tiros === 1) {
                        puntajes[7] = 35;
                    } else { puntajes[7] = 30 };
                }
                // escalera
            }
        } else if (puntajes[i] === (i + 1) * 2) {

        } else if ((valoresDados.includes(3)) && (valoresDados.includes(4)) && (valoresDados.includes(5))) {
            if (tiros === 1) {
                puntajes[6] = 25;
            } else { puntajes[6] = 20; }
        }


    }
}






function fijarDado1() {
    if (!fijado[0]) {
        fijado[0] = true;
        fijar1.innerHTML = 'desfijar dado';
        fijar1.style.backgroundColor = 'green';
        dado1.style.backgroundColor = 'orange';
    } else {
        fijado[0] = false;
        fijar1.innerHTML = 'fijar dado';
        fijar1.style.backgroundColor = 'lightgray';
        dado1.style.backgroundColor = 'white';
    }
}

function fijarDado2() {
    if (!fijado[1]) {
        fijado[1] = true;
        fijar2.innerHTML = 'desfijar dado';
        fijar2.style.backgroundColor = 'green';
        dado2.style.backgroundColor = 'orange';
    } else {
        fijado[1] = false;
        fijar2.innerHTML = 'fijar dado';
        fijar2.style.backgroundColor = 'lightgray';
        dado2.style.backgroundColor = 'white';
    }
}

function fijarDado3() {
    if (!fijado[2]) {
        fijado[2] = true;
        fijar3.innerHTML = 'desfijar dado';
        fijar3.style.backgroundColor = 'green';
        dado3.style.backgroundColor = 'orange';
    } else {
        fijado[2] = false;
        fijar3.innerHTML = 'fijar dado';
        fijar3.style.backgroundColor = 'lightgray';
        dado3.style.backgroundColor = 'white';
    }
}

function fijarDado4() {
    if (!fijado[3]) {
        fijado[3] = true;
        fijar4.innerHTML = 'desfijar dado';
        fijar4.style.backgroundColor = 'green';
        dado4.style.backgroundColor = 'orange';
    } else {
        fijado[3] = false;
        fijar4.innerHTML = 'fijar dado';
        fijar4.style.backgroundColor = 'lightgray';
        dado4.style.backgroundColor = 'white';
    }
}

function fijarDado5() {
    if (!fijado[4]) {
        fijado[4] = true;
        fijar5.innerHTML = 'desfijar dado';
        fijar5.style.backgroundColor = 'green';
        dado5.style.backgroundColor = 'orange';
    } else {
        fijado[4] = false;
        fijar5.innerHTML = 'fijar dado';
        fijar5.style.backgroundColor = 'lightgray';
        dado5.style.backgroundColor = 'white';
    }
}

function tirarLosDados() {
    if (tiros === 0) {
        conteo.innerHTML = "Tiros Realizados = 1 / 3";
        tiros++;
    } else if (tiros === 1) {
        conteo.innerHTML = "Tiros Realizados = 2 / 3";
        tiros++;
    } else {
        conteo.innerHTML = "Tiros Realizados = 3 / 3";
        tirarDados.removeEventListener('click', tirarLosDados);
        tirarDados.innerHTML = "Jugada Finalizada";
        tirarDados.style.backgroundColor = "lightgray";
        tiros = 0;
    }
    for (let i = 0; i < 5; i++) {
        if (!fijado[i]) {
            valoresDados[i] = Math.floor(Math.random() * 6) + 1;
        }
    }
    dado1.innerHTML = valoresDados[0]
    dado2.innerHTML = valoresDados[1]
    dado3.innerHTML = valoresDados[2]
    dado4.innerHTML = valoresDados[3]
    dado5.innerHTML = valoresDados[4]
    tirarDados.style.backgroundColor = 'red';
    puntajes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    calcularPuntajes();
}


function reiniciar() {

    document.getElementById('puntajeTotal').innerHTML = puntajeTotal;
    conteo.innerHTML = "Tiros Realizados = 0 / 3";
    dado1.innerHTML = "";
    dado2.innerHTML = "";
    dado3.innerHTML = "";
    dado4.innerHTML = "";
    dado5.innerHTML = "";
    tirarDados.addEventListener('click', tirarLosDados);
    tirarDados.innerHTML = "Tirar Dados";
    puntajes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    fijar1.innerHTML = 'fijar dado';
    fijar1.style.backgroundColor = 'lightgray';
    dado1.style.backgroundColor = 'white';
    fijar2.innerHTML = 'fijar dado';
    fijar2.style.backgroundColor = 'lightgray';
    dado2.style.backgroundColor = 'white';
    fijar3.innerHTML = 'fijar dado';
    fijar3.style.backgroundColor = 'lightgray';
    dado3.style.backgroundColor = 'white';
    fijar4.innerHTML = 'fijar dado';
    fijar4.style.backgroundColor = 'lightgray';
    dado4.style.backgroundColor = 'white';
    fijar5.innerHTML = 'fijar dado';
    fijar5.style.backgroundColor = 'lightgray';
    dado5.style.backgroundColor = 'white';
    for (let j = 0; j < 5; j++) { fijado[j] = false; };
    tiros = 0;
}

tirarDados.addEventListener('click', tirarLosDados);
fijar1.addEventListener('click', fijarDado1);
fijar2.addEventListener('click', fijarDado2);
fijar3.addEventListener('click', fijarDado3);
fijar4.addEventListener('click', fijarDado4);
fijar5.addEventListener('click', fijarDado5);


function anotar1() {
    document.getElementById('puntaje1').innerHTML = puntajes[0];
    puntajeTotal += puntajes[0];
    document.getElementById('anotar1').style.display = 'none';
    reiniciar();
}
document.getElementById('anotar1').addEventListener('click', anotar1);

function anotar2() {
    document.getElementById('puntaje2').innerHTML = puntajes[1];
    puntajeTotal += puntajes[1];
    document.getElementById('anotar2').style.display = 'none';
    reiniciar();
}
document.getElementById('anotar2').addEventListener('click', anotar2);

function anotar3() {
    document.getElementById('puntaje3').innerHTML = puntajes[2];
    puntajeTotal += puntajes[2];
    document.getElementById('anotar3').style.display = 'none';
    reiniciar();
}
document.getElementById('anotar3').addEventListener('click', anotar3);

function anotar4() {
    document.getElementById('puntaje4').innerHTML = puntajes[3];
    puntajeTotal += puntajes[3];
    document.getElementById('anotar4').style.display = 'none';
    reiniciar();
}
document.getElementById('anotar4').addEventListener('click', anotar4);

function anotar5() {
    document.getElementById('puntaje5').innerHTML = puntajes[4];
    puntajeTotal += puntajes[4];
    document.getElementById('anotar5').style.display = 'none';
    reiniciar();
}
document.getElementById('anotar5').addEventListener('click', anotar5);

function anotar6() {
    document.getElementById('puntaje6').innerHTML = puntajes[5];
    puntajeTotal += puntajes[5];
    document.getElementById('anotar6').style.display = 'none';
    reiniciar();
}
document.getElementById('anotar6').addEventListener('click', anotar6);

function anotarEscalera() {
    document.getElementById('puntajeEscalera').innerHTML = puntajes[6];
    puntajeTotal += puntajes[6];
    document.getElementById('anotarEscalera').style.display = 'none';
    reiniciar();
}
document.getElementById('anotarEscalera').addEventListener('click', anotarEscalera);

function anotarFull() {
    document.getElementById('puntajeFull').innerHTML = puntajes[7];
    puntajeTotal += puntajes[7];
    document.getElementById('anotarFull').style.display = 'none';
    reiniciar();
}
document.getElementById('anotarFull').addEventListener('click', anotarFull);

function anotarPoker() {
    document.getElementById('puntajePoker').innerHTML = puntajes[8];
    puntajeTotal += puntajes[8];
    document.getElementById('anotarPoker').style.display = 'none';
    reiniciar();
}
document.getElementById('anotarPoker').addEventListener('click', anotarPoker);

function anotarGenerala() {
    document.getElementById('puntajeGenerala').innerHTML = puntajes[9];
    puntajeTotal += puntajes[9];
    document.getElementById('anotarGenerala').style.display = 'none';
    reiniciar();
}
document.getElementById('anotarGenerala').addEventListener('click', anotarGenerala);

function anotarDobleGenerala() {
    document.getElementById('puntajeDobleGenerala').innerHTML = puntajes[10];
    puntajeTotal += puntajes[10];
    document.getElementById('anotarDobleGenerala').style.display = 'none';
    reiniciar();
}
document.getElementById('anotarDobleGenerala').addEventListener('click', anotarDobleGenerala);

