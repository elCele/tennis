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

/* Giocatore 1 
    batTotG1: document.getElementById('batTotG1'),
    batPrimaG1: document.getElementById('batPrimaG1'),
    batSecondaG1: document.getElementById('batSecondaG1'),
    batNoneG1: document.getElementById('batNoneG1'),
    batEG1: document.getElementById('batEG1'),
    batCG1: document.getElementById('batCG1'),
    batIG1: document.getElementById('batIG1'),
    rispTotG1: document.getElementById('rispTotG1'),
    rispNoneG1: document.getElementById('rispNoneG1'),
    rispCG1: document.getElementById('rispCG1'),
    rispTG1: document.getElementById('rispTG1'),
    rispDG1: document.getElementById('rispDG1'),
    rispLG1: document.getElementById('rispLG1'),
    t3TotG1: document.getElementById('t3TotG1'),
    t3NoneG1: document.getElementById('t3NoneG1'),
    t3CG1: document.getElementById('t3CG1'),
    t3T1: document.getElementById('t3TG1'),
    t3D1: document.getElementById('t3DG1'),
    t3L1: document.getElementById('t3LG1'),
    winG1: document.getElementById('winG1')
*/

/* Giocatore 2 
    batTotG2: document.getElementById('batTotG2'),
    batPrimaG2: document.getElementById('batPrimaG2'),
    batSecondaG2: document.getElementById('batSecondaG2'),
    batNoneG2: document.getElementById('batNoneG2'),
    batEG2: document.getElementById('batEG2'),
    batCG2: document.getElementById('batCG2'),
    batIG2: document.getElementById('batIG2'),
    rispTotG2: document.getElementById('rispTotG2'),
    rispNoneG2: document.getElementById('rispNoneG2'),
    rispCG2: document.getElementById('rispCG2'),
    rispTG2: document.getElementById('rispTG2'),
    rispDG2: document.getElementById('rispDG2'),
    rispLG2: document.getElementById('rispLG2'),
    t3TotG2: document.getElementById('t3TotG2'),
    t3NoneG2: document.getElementById('t3NoneG2'),
    t3CG2: document.getElementById('t3CG2'),
    t3T2: document.getElementById('t3TG2'),
    t3D2: document.getElementById('t3DG2'),
    t3L2: document.getElementById('t3LG2'),
    winG2: document.getElementById('winG2')
*/

// pozzo variabili
let puntiGameG1 = 0;
let puntiGameG2 = 0;
let gameG1 = 0;
let gameG2 = 0;

// oggetto Giocatore 1

const Giocatore1 = {
    batTotG1: 0,
    batPrimaG1: 0,
    batSecondaG1: 0,
    batNoneG1: 0,
    batEG1: 0,
    batCG1: 0,
    batIG1: 0,
    rispTotG1: 0,
    rispNoneG1: 0,
    rispCG1: 0,
    rispTG1: 0,
    rispDG1: 0,
    rispLG1: 0,
    t3TotG1: 0,
    t3NoneG1: 0,
    t3CG1: 0,
    t3TG1: 0,
    t3DG1: 0,
    t3LG1: 0,
    fG1: 0,
    gG1: 0,
    winG1: 0
}

// oggetto Giocatore 2

const Giocatore2 = {
    batTotG2: 0,
    batPrimaG2: 0,
    batSecondaG2: 0,
    batNoneG2: 0,
    batEG2: 0,
    batCG2: 0,
    batIG2: 0,
    rispTotG2: 0,
    rispNoneG2: 0,
    rispCG2: 0,
    rispTG2: 0,
    rispDG2: 0,
    rispLG2: 0,
    t3TotG2: 0,
    t3NoneG2: 0,
    t3CG2: 0,
    t3TG2: 0,
    t3DG2: 0,
    t3LG2: 0,
    fG2: 0,
    gG2: 0,
    winG2: 0
}

// oggetto durata

const durataObj = {
    quattro: 0,
    otto: 0,
    nove: 0
}

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


    // assegno dati battuta
    if(punto.giocatoreBattuta === 'G1') {
        
        // Giocatore 1 battuta
        Giocatore1.batTotG1 += 1;

        if (punto.battuta === '1') {
            Giocatore1.batPrimaG1 += 1;
        } else if (punto.battuta === '2') {
            Giocatore1.batSecondaG1 += 1;
        } else {
            Giocatore1.batNoneG1 += 1;
        }

        if (punto.dirBattuta === 'E') {
            Giocatore1.batEG1 += 1;
        } else if (punto.dirBattuta === 'C') {
            Giocatore1.batCG1 += 1;
        } else if (punto.dirBattuta === 'I') {
            Giocatore1.batIG1 +=1;
        }

    } else {

        // Giocatore 2 battuta
        Giocatore2.batTotG2 += 1;

        if (punto.battuta === '1') {
            Giocatore2.batPrimaG2 += 1;
        } else if (punto.battuta === '2') {
            Giocatore2.batSecondaG2 += 1;
        } else {
            Giocatore2.batNoneG2 += 1;
        }

        if (punto.dirBattuta === 'E') {
            Giocatore2.batEG2 += 1;
        } else if (punto.dirBattuta === 'C') {
            Giocatore2.batCG2 += 1;
        } else if (punto.dirBattuta === 'I') {
            Giocatore2.batIG2 +=1;
        }

    }
    

    // assegno dati risposta
    if (punto.giocatoreRisposta === 'G1') {

        // Giocatore 1 risposta
        Giocatore1.rispTotG1 += 1;

        if (punto.dirRisposta === 'C') {
            Giocatore1.rispCG1 += 1;
        } else if (punto.dirRisposta === 'T') {
            Giocatore1.rispTG1 += 1;
        } else if (punto.dirRisposta === 'D') {
            Giocatore1.rispDG1 += 1;
        } else if (punto.dirRisposta === 'L') {
            Giocatore1.rispLG1 += 1;
        } else {
            Giocatore1.rispNoneG1 += 1;
        }

    } else {

        // Giocatore 2 risposta
        Giocatore2.rispTotG2 += 1;

        if (punto.dirRisposta === 'C') {
            Giocatore2.rispCG2 += 1;
        } else if (punto.dirRisposta === 'T') {
            Giocatore2.rispTG2 += 1;
        } else if (punto.dirRisposta === 'D') {
            Giocatore2.rispDG2 += 1;
        } else if (punto.dirRisposta === 'L') {
            Giocatore2.rispLG2 += 1;
        } else {
            Giocatore2.rispNoneG2 += 1;
        }

    }
    

    // assegno terzo tocco
    if (punto.giocatoreTT === 'G1') {

        // Giocatore 1 terzo tocco
        Giocatore1.t3TotG1 += 1;

        if (punto.dirTT === 'C') {
            Giocatore1.t3CG1 += 1;
        } else if (punto.dirTT === 'T') {
            Giocatore1.t3TG1 += 1;
        } else if (punto.dirTT === 'D') {
            Giocatore1.t3DG1 += 1;
        } else if (punto.dirTT === 'L') {
            Giocatore1.rispLG1 += 1;
        } else {
            Giocatore1.t3NoneG1 += 1;
        }

    } else {

        // Giocatore 2 terzo tocco
        Giocatore1.t3TotG2 += 1;

        if (punto.dirTT === 'C') {
            Giocatore1.t3CG2 += 1;
        } else if (punto.dirTT === 'T') {
            Giocatore1.t3TG2 += 1;
        } else if (punto.dirTT === 'D') {
            Giocatore1.t3DG2 += 1;
        } else if (punto.dirTT === 'L') {
            Giocatore1.rispLG2 += 1;
        } else {
            Giocatore1.t3NoneG1 += 1;
        }

    }

    // assegno f o g
        // Giocatore 1
        if (punto.vincitore === 'G1' && punto.fog === 'F') {
            Giocatore1.fG1 += 1;
        } else if (punto.vincitore === 'G1' && punto.fog === 'G') {
            Giocatore2.gG2 += 1;
        }
        // Giocatore 2
        if (punto.vincitore === 'G2' && punto.fog === 'F') {
            Giocatore2.fG2 += 1;
        } else if (punto.vincitore === 'G2' && punto.fog === 'G') {
            Giocatore1.gG1 += 1;
        }
    
    // assegno vittorie
    if (punto.vincitore === 'G1') {
        Giocatore1.winG1 += 1;
    } else {
        Giocatore2.winG2 += 1;
    }

    // assegno durata scambi
    if (punto.durata === '4') {
        durataObj.quattro += 1;
    } else if (punto.durata === '8') {
        durataObj.otto += 1;
    } else {
        durataObj.nove += 1;
    }

    toViewValue();


    function toViewValue() {

            const batTtoG1 = document.getElementById('batTotG1'),
            const batPrimaG1 = document.getElementById('batPrimaG1'),
            const batSecondaG1 = document.getElementById('batSecondaG1'),
            const batNoneG1 = document.getElementById('batNoneG1'),
            const batEG1 = document.getElementById('batEG1'),
            const batCG1 = document.getElementById('batCG1'),
            const batIG1 = document.getElementById('batIG1'),
            const rispTotG1 = document.getElementById('rispTotG1'),
            const rispNoneG1 = document.getElementById('rispNoneG1'),
            const rispCG1 = document.getElementById('rispCG1'),
            const rispTG1 = document.getElementById('rispTG1'),
            const rispDG1 = document.getElementById('rispDG1'),
            const rispLG1 = document.getElementById('rispLG1'),
            const t3TotG1 = document.getElementById('t3TotG1'),
            const t3NoneG1 = document.getElementById('t3NoneG1'),
            const t3CG1 = document.getElementById('t3CG1'),
            const t3TG1 = document.getElementById('t3TG1'),
            const t3DG1 = document.getElementById('t3DG1'),
            const t3LG1 = document.getElementById('t3LG1'),
            const fG1 = document.getElementById('fG1'),
            const gG1 = document.getElementById('gG1'),
            const winG1 = document.getElementById('winG1')

        const arrayG2 = newArray(
            document.getElementById('batTotG2'),
            document.getElementById('batPrimaG2'),
            document.getElementById('batSecondaG2'),
            document.getElementById('batNoneG2'),
            document.getElementById('batEG2'),
            document.getElementById('batCG2'),
            document.getElementById('batIG2'),
            document.getElementById('rispTotG2'),
            document.getElementById('rispNoneG2'),
            document.getElementById('rispCG2'),
            document.getElementById('rispTG2'),
            document.getElementById('rispDG2'),
            document.getElementById('rispLG2'),
            document.getElementById('t3TotG2'),
            document.getElementById('t3NoneG2'),
            document.getElementById('t3CG2'),
            document.getElementById('t3TG2'),
            document.getElementById('t3DG2'),
            document.getElementById('t3LG2'),
            document.getElementById('fG2'),
            document.getElementById('gG2'),
            document.getElementById('winG2')
        );

        const arrayDurata = newArray(
            document.getElementById('durataPunto04'),
            document.getElementById('durataPunto48'),
            document.getElementById('durataPunto9')
        );
    }
}