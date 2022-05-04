const turnObj = {
    smash: '',
    first: '',
    second: '',
    third: '',
    exchange: '',
    FoG: '',
    winner: ''
};

const turn = new Object(turnObj);
let match = [];

const PbatTot = document.getElementById('batTot');
const PbatPrima = document.getElementById('batPrima');
const PbatSeconda = document.getElementById('batSeconda');
const PbatC = document.getElementById('batC');
const PbatE = document.getElementById('batE');
const PbatI = document.getElementById('batI');
const PbatP1 = document.getElementById('batP1');
const PbatP2 = document.getElementById('batP2');
const PrispTot = document.getElementById('rispTot');
const PrispC = document.getElementById('rispC');
const PrispT = document.getElementById('rispT');
const PrispD = document.getElementById('rispD');
const PrispL = document.getElementById('rispL');
const PrispP1 = document.getElementById('rispP1');
const PrispP2 = document.getElementById('rispP2');
const PtTTot = document.getElementById('tTTot');
const PtTC = document.getElementById('tTC');
const PtTT = document.getElementById('tTT');
const PtTD = document.getElementById('tTD');
const PtTL = document.getElementById('tTL');
const PtTP1 = document.getElementById('tTP1');
const PtTP2 = document.getElementById('tTP2');
const P04 = document.getElementById('04');
const P48 = document.getElementById('48');
const FUCKINGVARIABILE = document.getElementById('noveP');
const PF = document.getElementById('F');
const PG = document.getElementById('G');
const PwinP1 = document.getElementById('winP1');
const PwinP2 = document.getElementById('winP2');

function reset() {
    turn.smash = '';
    turn.first = '';
    turn.second = '';
    turn.third = '';
    turn.FoG = '';
    turn.exchange = '';
    turn.winner = '';
}

function smash(elementID) {
    turn.smash = elementID;
}

function first(elementID) {
    turn.first = elementID;
}

function second(elementID) {
    turn.second = elementID;
}

function third(elementID) {
    turn.third = elementID;
}

function FoG(elementID) {
    turn.FoG = elementID;
}

function exchange(elementID) {
    turn.exchange = elementID;
}

function winner(elementID) {
    turn.winner = elementID;
}

function submit() {

    if (turn.smash === '') {
        alert('Prima o seconda  battuta?');
    } else if (turn.FoG === '') {
        alert('Forzato o gratuito?')
    } else if (turn.exchange === '') {
        alert('Quanti scambi ci sono stati?')
    } else if (turn.first === '' && turn.second != '') {
        alert('Tipo di battuta?')
    } else if (turn.winner === '') {
        alert('Chi ha vinto?')
    } else {
        submitStart();
    }

    function submitStart() {
            match.push(turn.smash);
            match.push(turn.first);
            match.push(turn.second);
            match.push(turn.third);
            match.push(turn.FoG);
            match.push(turn.exchange);
            match.push(turn.winner);

            turn.smash = '';
            turn.first = '';
            turn.second = '';
            turn.third = '';
            turn.FoG = '';
            turn.exchange = '';
            turn.winner = '';

            console.log(match);
    }
}

function arrayRead() {
    
    // variable declaration
    let batTot = 0; // done
    let batPrima = 0; // done
    let batSeconda = 0; // done
    let batC = 0; // done
    let batE = 0; // done
    let batI = 0; // done
    let batP1 = 0; // done
    let batP2 = 0; // done
    
    let rispTot = 0; // done
    let rispC = 0; // done
    let rispT = 0; // done
    let rispD = 0; // done
    let rispL = 0; // done
    let rispP1 = 0; // done
    let rispP2 = 0; // done

    let tTTot = 0; // done
    let tTC = 0; // done
    let tTT = 0; // done
    let tTD = 0; // done
    let tTL = 0; // done
    let tTP1 = 0; // done
    let tTP2 = 0; // done

    let zeroquattro = 0; // done
    let quattrootto = 0; // done
    let nove = 0; // done

    let F = 0; // done
    let G = 0; // done
    let WinP1 = 0; // done
    let WinP2 = 0; // done

    for (let j=0; j<match.length; j += 1) {
        if (match[j] === '') {
            match.splice(j, 1);
        }
    }

    console.log(match);
    
    for (let i=0; i<match.length; i += 1) {

        switch (match[i]) {
            
            // battute
                case 'pP1':
                    batPrima += 1;
                    batTot += 1;
                    batP1 += 1;
                break;

                case 'pP2':
                    batPrima += 1;
                    batTot += 1;
                    batP2 += 1;
                break;
            
                case 'sP1':
                    batSeconda += 1;
                    batTot += 1;
                    batP1 += 1;
                break;

                case 'sP2':
                    batSeconda += 1;
                    batTot += 1;
                    batP2 += 1;
                break;

                case 'cP1_F':
                case 'cP2_F':
                    batC += 1;
                break;

                case 'eP1_F':
                case 'eP2_F':
                    batE += 1;
                break;

                case 'iP1_F':
                case 'iP2_F':
                    batI += 1;
                break;

            // risposte

                case 'cP1_S':
                    rispC += 1;
                    rispP1 += 1;
                    rispTot += 1;
                break;

                case 'tP1_S':
                    rispT += 1;
                    rispP1 += 1;
                    rispTot += 1;
                break;

                case 'dP1_S':
                    rispD += 1;
                    rispP1 += 1;
                    rispTot += 1;
                break;

                case 'lP1_S':
                    rispL += 1;
                    rispP1 += 1;
                    rispTot += 1;
                break;

                case 'cP2_S':
                    rispC += 1;
                    rispP2 += 1;
                    rispTot += 1;
                break;

                case 'tP2_S':
                    rispT += 1;
                    rispP2 += 1;
                    rispTot += 1;
                break;

                case 'dP2_S':
                    rispD += 1;
                    rispP2 += 1;
                    rispTot += 1;
                break;

                case 'lP2_S':
                    rispL += 1;
                    rispP2 += 1;
                    rispTot += 1;
                break;

            // terzi tocchi

                case 'cP1_T':
                    tTC += 1;
                    tTP1 += 1;
                    tTTot += 1;
                break;

                case 'tP1_T':
                    tTT += 1;
                    tTP1 += 1;
                    tTTot += 1;
                break;

                case 'dP1_T':
                    tTD += 1;
                    tTP1 += 1;
                    tTTot += 1;
                break;

                case 'lP1_T':
                    tTL += 1;
                    tTP1 += 1;
                    tTTot += 1;
                break;

                case 'cP2_T':
                    tTC += 1;
                    tTP2 += 1;
                    tTTot += 1;
                break;

                case 'tP2_T':
                    tTT += 1;
                    tTP2 += 1;
                    tTTot += 1;
                break;

                case 'dP2_T':
                    tTD += 1;
                    tTP2 += 1;
                    tTTot += 1;
                break;

                case 'lP2_T':
                    tTL += 1;
                    tTP2 += 1;
                    tTTot += 1;
                break;

            // durata scambi

                case '0-4':
                    zeroquattro += 1;
                break;

                case '4-8':
                    quattrootto += 1;
                break;

                case 'nove':
                    nove += 1;
                break;

            // FoG and Win

                case 'forzato':
                    F += 1;
                break;

                case 'gratuito':
                    G += 1;
                break;

                case 'P1_W':
                    WinP1 += 1;
                break;

                case 'P2_W':
                    WinP2 += 1;
                break;

            default:
                alert('Just skip');
                break;
        }
    }

    PbatTot.innerHTML = 'Battute totali: '
    PbatPrima.innerHTML = 'Battute di prima: '; 
    PbatSeconda.innerHTML = 'Battute di seconda: '; 
    PbatC.innerHTML = 'Battute centrali: '; 
    PbatE.innerHTML = 'Battute esterne: '; 
    PbatI.innerHTML = 'Battute interne: '; 
    PbatP1.innerHTML = 'Battute del giocatore 1: '; 
    PbatP2.innerHTML = 'Battute del giocatore 2: ';

    PrispTot.innerHTML = 'Risposte totali: '; 
    PrispC.innerHTML = 'Risposte centrali: '; 
    PrispT.innerHTML = 'Risposte sulla T: '; 
    PrispD.innerHTML = 'Risposte diagonali: '; 
    PrispL.innerHTML = 'Risposte lungolinea: '; 
    PrispP1.innerHTML = `Risposte del giocatore 1: `; 
    PrispP2.innerHTML = 'Risposte del giocatore 2: ';

    PtTTot.innerHTML = 'Terzi tocchi totali: '; 
    PtTC.innerHTML = 'Terzi tocchi centrali: '; 
    PtTT.innerHTML = 'Terzi tocchi sulla T: '; 
    PtTD.innerHTML = 'Terzi tocchi daigonali: '; 
    PtTL.innerHTML = 'Terzi tocchi lungolinea: '; 
    PtTP1.innerHTML = 'Terzi tocchi del giocatore 1: ';
    PtTP2.innerHTML = 'Terzi tocchi del giocatore 2: '; 

    P04.innerHTML = '0 - 4 scambi: '; 
    P48.innerHTML = '4 - 8 scambi: '; 
    FUCKINGVARIABILE.innerHTML = '9+ scambi: '; 

    PF.innerHTML = 'Scambi forzati: '; 
    PG.innerHTML = 'Scambi gratuiti: '; 

    PwinP1.innerHTML = 'Set vinti dal giocatori 1: '; 
    PwinP2.innerHTML = 'Set vinti dal giocatore 2: ';


    PbatTot.innerHTML += batTot; 
    PbatPrima.innerHTML += `${batPrima}   ${Math.floor((batPrima * 100) / batTot)}%`; 
    PbatSeconda.innerHTML += `${batSeconda}   ${Math.floor((batSeconda * 100) / batTot)}%`; 
    PbatC.innerHTML += `${batC}    ${Math.floor((batC * 100) / batTot)}%`; 
    PbatE.innerHTML += `${batE}    ${Math.floor((batE * 100) / batTot)}%`; 
    PbatI.innerHTML += `${batI}    ${Math.floor((batI * 100) / batTot)}%`; 
    PbatP1.innerHTML += `${batP1}    ${Math.floor((batP1 * 100) / batTot)}%`; 
    PbatP2.innerHTML += `${batP2}    ${Math.floor((batP2 * 100) / batTot)}%`;

    PrispTot.innerHTML += rispTot; 
    PrispC.innerHTML += `${rispC}    ${Math.floor((rispC * 100) / rispTot)}%`; 
    PrispT.innerHTML += `${rispT}    ${Math.floor((rispT * 100) / rispTot)}%`; 
    PrispD.innerHTML += `${rispD}    ${Math.floor((rispD * 100) / rispTot)}%`; 
    PrispL.innerHTML += `${rispL}    ${Math.floor((rispL * 100) / rispTot)}%`; 
    PrispP1.innerHTML += `${rispP1}    ${Math.floor((rispP1 * 100) / rispTot)}%`; 
    PrispP2.innerHTML += `${rispP2}    ${Math.floor((rispP2 * 100) / rispTot)}%`;

    PtTTot.innerHTML += tTTot; 
    PtTC.innerHTML += `${tTC}    ${Math.floor((tTC * 100) / tTTot)}%`; 
    PtTT.innerHTML += `${tTT}    ${Math.floor((tTT * 100) / tTTot)}%`; 
    PtTD.innerHTML += `${tTD}    ${Math.floor((tTD * 100) / tTTot)}%`; 
    PtTL.innerHTML += `${tTL}    ${Math.floor((tTL * 100) / tTTot)}%`; 
    PtTP1.innerHTML += `${tTP1}    ${Math.floor((tTP1 * 100) / tTTot)}%`;
    PtTP2.innerHTML += `${tTP2}    ${Math.floor((tTP2 * 100) / tTTot)}%`; 

    P04.innerHTML += `${zeroquattro}    ${Math.floor((zeroquattro * 100) / (WinP1 + WinP2))}%`; 
    P48.innerHTML += `${quattrootto}    ${Math.floor((quattrootto * 100) / (WinP1 + WinP2))}%`; 
    FUCKINGVARIABILE.innerHTML += `${nove}   ${Math.floor((nove * 100) / (WinP1 + WinP2))}%`; 

    PF.innerHTML += `${F}    ${Math.floor((F * 100) / batTot)}%`; 
    PG.innerHTML += `${G}    ${Math.floor((G * 100) / batTot)}%`; 

    PwinP1.innerHTML += `${WinP1}    ${Math.floor((WinP1 * 100) / (WinP1 + WinP2))}%`; 
    PwinP2.innerHTML += `${WinP2}    ${Math.floor((WinP2 * 100) / (WinP1 + WinP2))}%`; 
}


//hahahahahaha sei gay