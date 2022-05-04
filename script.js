// oggetto punto
const punto = {
    giocatoreBattuta: '',
    battuta: '',
    dirBattuta: '',
    giocatoreRisposta: '',
    dirRisposta: '',
    giocatoreTT: '',
    dirTT: '',
    fog: '',
    durata: '',
    vincitore: ''
}

let puntiGameG1 = 0;
let puntiGameG2 = 0;
let gameG1 = 0;
let gameG2 = 0;


function submitPunto() {

    // reset object
    punto.giocatoreBattuta = '';
    punto.battuta = '';
    punto.dirBattuta = '';
    punto.giocatoreRisposta = '';
    punto.dirRisposta = '';
    punto.giocatoreTT = '';
    punto.dirTT = '';
    punto.fog = '';
    punto.durata = '';
    punto.vincitore = '';

    // assegno variabili
    punto.giocatoreBattuta = document.getElementById('playerBattuta').value;
    punto.battuta = document.getElementById('battutaN').value;
    punto.dirBattuta = document.getElementById('battutaDir').value;
    if (punto.giocatoreBattuta === 'G1') {
        punto.giocatoreRisposta = 'G2';
    } else {
        punto.giocatoreRisposta = 'G1';
    }
    punto.dirRisposta = document.getElementById('rispostaDir').value;
    punto.giocatoreTT = document.getElementById('playerBattuta').value;
    punto.dirTT = document.getElementById('terzoToccoDir').value;
    punto.fog = document.getElementById('fg').value;
    punto.durata = document.getElementById('game').value;
    punto.vincitore = document.getElementById('vincitore').value;
    punto.N++;

    // punteggio
    const punteggioBox = document.getElementById('punteggio');
    const gameBox = document.getElementById('game');

    if (!(puntiGameG1 === 40 && puntiGameG2 === 40)) {
        if ( punto.vincitore === 'G1') {
            switch(puntiGameG1) {
                case 0:
                    puntiGameG1 = 15;
                    break;
                case 15:
                    puntiGameG1 = 30;
                    break;
                case 30:
                    puntiGameG1 = 40;
                    break;
                case 40:
                    puntiGameG1 = 0;
                    puntiGameG2 = 0;
                    gameG1 += 1;
                default:
            }
        } else {
            switch(puntiGameG2) {
                case 0:
                    puntiGameG2 = 15;
                    break;
                case 15:
                    puntiGameG2 = 30;
                    break;
                case 30:
                    puntiGameG2 = 40;
                    break;
                case 40:
                    puntiGameG1 = 0;
                    puntiGameG2 = 0;
                    gameG2 += 1;
                default:
            }
        }
    }
    punteggioBox.innerHTML = `${puntiGameG1} - ${puntiGameG2}`;
    gameBox.innerHTML = `${gameG1} - ${gameG2}`;
}