const prompt = require('prompt');

prompt.start();
let instructionLength = [];
let instruction = [];
let msgLength;
let msg;

let aux = [[], []];
let counting = [0, 0];
let response = ['NO', 'NO'];

const decrypt = () => {
    msg.forEach(msgLetter => {
        for (let i = 0; i < 2; i++) {
            if (msgLetter == aux[i][0]) {
                if (aux[i].length == 1) response[i] = 'SI';
                counting[i]++;
                if (counting[i] > 3) {
                    aux[i] = [];
                    counting[i] = 0;
                }
            } else if (msgLetter == aux[i][1]) {
                aux[i].shift();
                counting[i] = 0;
                if (!aux[i].length) response[i] = 'SI';
            } else if (msgLetter == instruction[i][0] && !aux[i].length) {
                aux[i] = instruction[i].slice(0, instructionLength[i]);
                counting[i]++;
            } else {
                aux[i] = [];
                counting[i] = 0;
            }
        }
    });
    response.forEach(elem => console.log(elem));
}

prompt.get(['linea1', 'linea2', 'linea3', 'linea4'], (err, result) => {
    const linea1 = result.linea1.split(' ');
    instructionLength[0] = parseInt(linea1[0]);
    instructionLength[1] = parseInt(linea1[1]);
    msgLength = parseInt(linea1[2]);
    instruction[0] = result.linea2.split('');
    instruction[1] = result.linea3.split('');
    msg = result.linea4.split('');
    decrypt();
});


// const result = {
//     linea1: '11 15 38',
//     linea2: 'CeseAlFuego',
//     linea3: 'CorranACubierto',
//     linea4: 'XXcaaamakkCCessseAAllFueeegooDLLKmmNNN',
// }
// const linea1 = result.linea1.split(' ');
// instructionLength[0] = parseInt(linea1[0]);
// instructionLength[1] = parseInt(linea1[1]);
// msgLength = parseInt(linea1[2]);
// instruction[0] = result.linea2.split('');
// instruction[1] = result.linea3.split('');
// msg = result.linea4.split('');
// decrypt();