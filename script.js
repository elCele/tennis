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

/* Player 1 variables
 quante battute di prima
 ''     ''      '' seconda
 quanti battute centrali, esterne o interne [cP1_F, eP1_F, iP1_F]  | battute totali
 quante risposte centrali, sulla t, diagonali e lungolinea [cP1_S, tP1_S, dP1_S, lP1_S]    | risposte totali
 quanti terzi tocchi centrali, sulla t, diagonali e lungolinea [cP1_T, tP1_T, dP1_T, lP1_T]    | terzi tocchi totali
 quanti forzati [nF]
 quanti gratuiti [nG]
 quanti match vinti [nW]

 idem per il player 2

 battute totali
 risposte totali
 terzi colpi totali

 quanti match tra 0-4, tra 4-8 e 9+
 match totali
 */

function reset() {
    turn.smash = '';
    turn.first = '';
    turn.second = '';
    turn.third = '';
    turn.FoG = '';
    turn.exchange = '';
    turn.winner = '';
    

    console.log(turn);
}

function smash(elementID) {
    turn.smash = elementID;
    
    console.log(turn);
}

function first(elementID) {
    turn.first = elementID;
    
    console.log(turn);
}

function second(elementID) {
    turn.second = elementID;
    
    console.log(turn);
}

function third(elementID) {
    turn.third = elementID;
    
    console.log(turn);
}

function FoG(elementID) {
    turn.FoG = elementID;
    
    console.log(turn);
}

function exchange(elementID) {
    turn.exchange = elementID;
    
    console.log(turn);
}

function winner(elementID) {
    turn.winner = elementID;
    
    console.log(turn);
}

function submit() {
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