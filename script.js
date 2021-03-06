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

    const arrayGame = [];

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
    winG1: 0,
    puntiPrimaG1: 0,
    puntiSecondaG1: 0
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
    winG2: 0,
    puntiPrimaG2: 0,
    puntiSecondaG2: 0
}

// oggetto durata

const durataObj = {
    quattro: 0,
    otto: 0,
    nove: 0
}

    let Npunti = 0;

var tblbody = document.createElement('tbody');
var tbl = document.getElementById("tableCreate");

tbl.appendChild(tblbody);


function submitPunto() {

    Npunti += 1;

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
    punto.durata = document.getElementById('durataSel').value;
    punto.vincitore = document.getElementById('vincitore').value;

    if (punto.battuta === 'none') {
        punto.dirRisposta = punto.battuta;
        punto.dirTT = punto.battuta;
    }

    // punteggio
    const punteggioBox = document.getElementById('punteggio');
    const gameBox = document.getElementById('game');

    if (puntiGameG1 === 'Adv' && punto.vincitore === 'G1') {
        gameG1 += 1;
        puntiGameG1 = 0;
        puntiGameG2 = 0;
    } else if (puntiGameG2 === 'Adv' && punto.vincitore === 'G1') {
        puntiGameG1 = 40;
        puntiGameG2 = 40;
    } else if (puntiGameG2 === 'Adv' && punto.vincitore === 'G2') {
        gameG2 += 1;
        puntiGameG1 = 0;
        puntiGameG2 = 0;
    } else if (puntiGameG1 === 'Adv' && punto.vincitore === 'G2') {
        puntiGameG1 = 40;
        puntiGameG2 = 40;
    } else {

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
        } else {
            if ( punto.vincitore === 'G1') {
                puntiGameG1 = 'Adv';
                puntiGameG2 = '/';
                } else {
                    puntiGameG2 = 'Adv';
                    puntiGameG1 = '/';
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
            if (!(punto.battuta === 'none')) {
                Giocatore1.rispNoneG1 += 1;
            }
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
            if (!(punto.battuta === 'none')) {
                Giocatore2.rispNoneG2 += 1;
            }
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
            if (!(punto.battuta === 'none' && punto.dirRisposta === 'none')) {
                Giocatore1.t3NoneG1 += 1;
            }
        }

    } else {

        // Giocatore 2 terzo tocco
            Giocatore2.t3TotG2 += 1;

        if (punto.dirTT === 'C') {
            Giocatore1.t3CG2 += 1;
        } else if (punto.dirTT === 'T') {
            Giocatore1.t3TG2 += 1;
        } else if (punto.dirTT === 'D') {
            Giocatore1.t3DG2 += 1;
        } else if (punto.dirTT === 'L') {
            Giocatore1.rispLG2 += 1;
        } else {
            if (!(punto.battuta === 'none' && punto.dirRisposta === 'none')) {
                Giocatore2.t3NoneG2 += 1;
            }
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

    // assegno punti vinti a seconda della battuta
        // Giocatore 1
        if (punto.giocatoreBattuta === 'G1' && punto.vincitore === 'G1') {
            if (punto.battuta === '1') {
                Giocatore1.puntiPrimaG1 += 1;
            } else if (punto.battuta === '2') {
                Giocatore1.puntiSecondaG1 += 1;
            }
        }

        // Giocatore 2
        if (punto.giocatoreBattuta === 'G2' && punto.vincitore === 'G2') {
            if (punto.battuta === '1') {
                Giocatore2.puntiPrimaG2 += 1;
            } else if (punto.battuta === '2') {
                Giocatore2.puntiSecondaG2 += 1;
            }
        }

    // assegno durata scambi
    if (punto.durata === 'quattro') {
        durataObj.quattro += 1;
    } else if (punto.durata === 'otto') {
        durataObj.otto += 1;
    } else {
        durataObj.nove += 1;
    }

    toViewValue();
    tableCreate(); //zio fa funziona
}

    function toViewValue() {

        // variabili Giocatore 1
            const batTotG1 = document.getElementById('batTotG1');
            const batPrimaG1 = document.getElementById('batPrimaG1');
            const batSecondaG1 = document.getElementById('batSecondaG1');
            const batNoneG1 = document.getElementById('batNoneG1');
            const batEG1 = document.getElementById('batEG1');
            const batCG1 = document.getElementById('batCG1');
            const batIG1 = document.getElementById('batIG1');
            const rispTotG1 = document.getElementById('rispTotG1');
            const rispNoneG1 = document.getElementById('rispNoneG1');
            const rispCG1 = document.getElementById('rispCG1');
            const rispTG1 = document.getElementById('rispTG1');
            const rispDG1 = document.getElementById('rispDG1');
            const rispLG1 = document.getElementById('rispLG1');
            const t3TotG1 = document.getElementById('t3TotG1');
            const t3NoneG1 = document.getElementById('t3NoneG1');
            const t3CG1 = document.getElementById('t3CG1');
            const t3TG1 = document.getElementById('t3TG1');
            const t3DG1 = document.getElementById('t3DG1');
            const t3LG1 = document.getElementById('t3LG1');
            const fG1 = document.getElementById('fG1');
            const gG1 = document.getElementById('gG1');
            const winG1 = document.getElementById('winG1');
            const puntiPrimaG1 = document.getElementById('puntiPrimaG1');
            const puntiSecondaG1 = document.getElementById('puntiSecondaG1');

        // variabili Giocatore 2
            const batTotG2 = document.getElementById('batTotG2');
            const batPrimaG2 = document.getElementById('batPrimaG2');
            const batSecondaG2 = document.getElementById('batSecondaG2');
            const batNoneG2 = document.getElementById('batNoneG2');
            const batEG2 = document.getElementById('batEG2');
            const batCG2 = document.getElementById('batCG2');
            const batIG2 = document.getElementById('batIG2');
            const rispTotG2 = document.getElementById('rispTotG2');
            const rispNoneG2 = document.getElementById('rispNoneG2');
            const rispCG2 = document.getElementById('rispCG2');
            const rispTG2 = document.getElementById('rispTG2');
            const rispDG2 = document.getElementById('rispDG2');
            const rispLG2 = document.getElementById('rispLG2');
            const t3TotG2 = document.getElementById('t3TotG2');
            const t3NoneG2 = document.getElementById('t3NoneG2');
            const t3CG2 = document.getElementById('t3CG2');
            const t3TG2 = document.getElementById('t3TG2');
            const t3DG2 = document.getElementById('t3DG2');
            const t3LG2 = document.getElementById('t3LG2');
            const fG2 = document.getElementById('fG2');
            const gG2 = document.getElementById('gG2');
            const winG2 = document.getElementById('winG2');
            const puntiPrimaG2 = document.getElementById('puntiPrimaG2');
            const puntiSecondaG2 = document.getElementById('puntiSecondaG2');

        // variabili durata
            const quattroDiv = document.getElementById('durataPunto04');
            const ottoDiv = document.getElementById('durataPunto48');
            const noveDiv = document.getElementById('durataPunto9');

            
        // output Div variabili Giocatore 1
            batTotG1.innerHTML = `Battute totali: ${Giocatore1.batTotG1}`;
            batPrimaG1.innerHTML = `Battute di prima: ${Giocatore1.batPrimaG1} | ${fPerc(Giocatore1.batTotG1, Giocatore1.batPrimaG1)}%`;
            batSecondaG1.innerHTML = `Battute di seconda: ${Giocatore1.batSecondaG1} | ${fPerc(Giocatore1.batTotG1, Giocatore1.batSecondaG1)}%`;
            batNoneG1.innerHTML = `Battute sbagliate: ${Giocatore1.batNoneG1} | ${fPerc(Giocatore1.batTotG1, Giocatore1.batNoneG1)}%`;
            batEG1.innerHTML = `Battute esterne: ${Giocatore1.batEG1} | ${fPerc(Giocatore1.batTotG1, Giocatore1.batEG1)}%`;
            batCG1.innerHTML = `Battute centrali: ${Giocatore1.batCG1} | ${fPerc(Giocatore1.batTotG1, Giocatore1.batCG1)}%`;
            batIG1.innerHTML = `Battute interne: ${Giocatore1.batIG1} | ${fPerc(Giocatore1.batTotG1, Giocatore1.batIG1)}%`;
            rispTotG1.innerHTML = `Risposte totali: ${Giocatore1.rispTotG1}`;
            rispNoneG1.innerHTML = `Risposte sbagliate: ${Giocatore1.rispNoneG1} | ${fPerc(Giocatore1.rispTotG1, Giocatore1.rispNoneG1)}%`;
            rispCG1.innerHTML = `Risposte centrali: ${Giocatore1.rispCG1} | ${fPerc(Giocatore1.rispTotG1, Giocatore1.rispCG1)}%`;
            rispTG1.innerHTML = `Risposte sulla T: ${Giocatore1.rispTG1} | ${fPerc(Giocatore1.rispTotG1, Giocatore1.rispTG1)}%`;
            rispDG1.innerHTML = `Risposte diagonali: ${Giocatore1.rispLG1} | ${fPerc(Giocatore1.rispTotG1, Giocatore1.rispLG1)}%`;
            rispLG1.innerHTML = `Risposte lungolinea: ${Giocatore1.rispLG1} | ${fPerc(Giocatore1.rispTotG1, Giocatore1.rispLG1)}%`;
            t3TotG1.innerHTML = `Terzi tocchi totali: ${Giocatore1.t3TotG1}`;
            t3NoneG1.innerHTML = `Terzi tocchi sbagliati: ${Giocatore1.t3NoneG1} | ${fPerc(Giocatore1.t3TotG1, Giocatore1.t3NoneG1)}%`;
            t3CG1.innerHTML = `Terzi tocchi centrali: ${Giocatore1.t3CG1} | ${fPerc(Giocatore1.t3TotG1, Giocatore1.t3CG1)}%`;
            t3TG1.innerHTML = `Terzi tocchi sulla T: ${Giocatore1.t3TG1} | ${fPerc(Giocatore1.t3TotG1, Giocatore1.t3TG1)}%`;
            t3DG1.innerHTML = `Terzi tocchi diagonali: ${Giocatore1.t3DG1} | ${fPerc(Giocatore1.t3TotG1, Giocatore1.t3DG1)}%`;
            t3LG1.innerHTML = `Terzi tocchi lungolinea: ${Giocatore1.t3LG1} | ${fPerc(Giocatore1.t3TotG1, Giocatore1.t3LG1)}%`;
            fG1.innerHTML = `Punti forzati: ${Giocatore1.fG1} | ${fPerc(Npunti, Giocatore1.fG1)}%`;
            gG1.innerHTML = `Punti gratuiti: ${Giocatore1.gG1} | ${fPerc(Npunti, Giocatore1.gG1)}%`;
            winG1.innerHTML = `Punti vinti: ${Giocatore1.winG1} | ${fPerc(Npunti, Giocatore1.winG1)}%`;
            puntiPrimaG1.innerHTML = `Punti vinti battendo di prima: ${Giocatore1.puntiPrimaG1} | ${fPerc(Giocatore1.winG1, Giocatore1.puntiPrimaG1)}%`;
            puntiSecondaG1.innerHTML = `Punti vinti battendo di seconda: ${Giocatore1.puntiSecondaG1} | ${fPerc(Giocatore1.winG1, Giocatore1.puntiSecondaG1)}%`;

        // output Div variabili Giocatore 2
            batTotG2.innerHTML = `Battute totali: ${Giocatore2.batTotG2}`;
            batPrimaG2.innerHTML = `Battute di prima: ${Giocatore2.batPrimaG2} | ${fPerc(Giocatore2.batTotG2, Giocatore2.batPrimaG2)}%`;
            batSecondaG2.innerHTML = `Battute di seconda: ${Giocatore2.batSecondaG2} | ${fPerc(Giocatore2.batTotG2, Giocatore2.batSecondaG2)}%`;
            batNoneG2.innerHTML = `Battute sbagliate: ${Giocatore2.batNoneG2} | ${fPerc(Giocatore2.batTotG2, Giocatore2.batNoneG2)}%`;
            batEG2.innerHTML = `Battute esterne: ${Giocatore2.batEG2} | ${fPerc(Giocatore2.batTotG2, Giocatore2.batEG2)}%`;
            batCG2.innerHTML = `Battute centrali: ${Giocatore2.batCG2} | ${fPerc(Giocatore2.batTotG2, Giocatore2.batCG2)}%`;
            batIG2.innerHTML = `Battute interne: ${Giocatore2.batIG2} | ${fPerc(Giocatore2.batTotG2, Giocatore2.batIG2)}%`;
            rispTotG2.innerHTML = `Risposte totali: ${Giocatore2.rispTotG2}`;
            rispNoneG2.innerHTML = `Risposte sbagliate: ${Giocatore2.rispNoneG2} | ${fPerc(Giocatore2.rispTotG2, Giocatore2.rispNoneG2)}%`;
            rispCG2.innerHTML = `Risposte centrali: ${Giocatore2.rispCG2} | ${fPerc(Giocatore2.rispTotG2, Giocatore2.rispCG2)}%`;
            rispTG2.innerHTML = `Risposte sulla T: ${Giocatore2.rispTG2} | ${fPerc(Giocatore2.rispTotG2, Giocatore2.rispTG2)}%`;
            rispDG2.innerHTML = `Risposte diagonali: ${Giocatore2.rispLG2} | ${fPerc(Giocatore2.rispTotG2, Giocatore2.rispLG2)}%`;
            rispLG2.innerHTML = `Risposte lungolinea: ${Giocatore2.rispLG2} | ${fPerc(Giocatore2.rispTotG2, Giocatore2.rispLG2)}%`;
            t3TotG2.innerHTML = `Terzi tocchi totali: ${Giocatore2.t3TotG2}`;
            t3NoneG2.innerHTML = `Terzi tocchi sbagliati: ${Giocatore2.t3NoneG2} | ${fPerc(Giocatore2.t3TotG2, Giocatore2.t3NoneG2)}%`;
            t3CG2.innerHTML = `Terzi tocchi centrali: ${Giocatore2.t3CG2} | ${fPerc(Giocatore2.t3TotG2, Giocatore2.t3CG2)}%`;
            t3TG2.innerHTML = `Terzi tocchi sulla T: ${Giocatore2.t3TG2} | ${fPerc(Giocatore2.t3TotG2, Giocatore2.t3TG2)}%`;
            t3DG2.innerHTML = `Terzi tocchi diagonali: ${Giocatore2.t3DG2} | ${fPerc(Giocatore2.t3TotG2, Giocatore2.t3DG2)}%`;
            t3LG2.innerHTML = `Terzi tocchi lungolinea: ${Giocatore2.t3LG2} | ${fPerc(Giocatore2.t3TotG2, Giocatore2.t3LG2)}%`;
            fG2.innerHTML = `Punti forzati: ${Giocatore2.fG2} | ${fPerc(Npunti, Giocatore2.fG2)}%`;
            gG2.innerHTML = `Punti gratuiti: ${Giocatore2.gG2} | ${fPerc(Npunti, Giocatore2.gG2)}%`;
            winG2.innerHTML = `Punti vinti: ${Giocatore2.winG2} | ${fPerc(Npunti, Giocatore2.winG2)}%`;
            puntiPrimaG2.innerHTML = `Punti vinti battendo di prima: ${Giocatore2.puntiPrimaG2} | ${fPerc(Giocatore2.winG2, Giocatore2.puntiPrimaG2)}%`;
            puntiSecondaG2.innerHTML = `Punti vinti battendo di seconda: ${Giocatore2.puntiSecondaG2} | ${fPerc(Giocatore2.winG2, Giocatore1.puntiSecondaG2)}%`;

        // output Div variabili durata
            quattroDiv.innerHTML = `Tra 0 e 4 scambi: ${durataObj.quattro} | ${fPerc(Npunti, durataObj.quattro)}%`;
            ottoDiv.innerHTML = `Tra 4 e 8 scambi: ${durataObj.otto} | ${fPerc(Npunti, durataObj.otto)}%`;
            noveDiv.innerHTML = `Pi?? di 9 scambi: ${durataObj.nove} | ${fPerc(Npunti, durataObj.nove)}%`;
        }

function fPerc(tot, perc) {
    let value = Math.round((perc * 100) / tot)
    return value;
}

function tableCreate() {
      
          // table row creation
          var row = document.createElement("tr");
          row.className = 'border';
          // array inside create
          const arrayPoint = [];
      
          var i = 0;
          for (const property in punto) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode(punto[property]);
            arrayPoint.push(punto[property]);
      
            cell.appendChild(cellText);
            cell.className = 'tbCcell';
            row.appendChild(cell);
            i += 1;
            cell.style.border = 'thin, black, 2px';
          }
      
          //row added to end of table body
          tblbody.appendChild(row);
          
          // push to arrayGame
          arrayGame.push(arrayPoint);
          console.log(arrayGame);
}