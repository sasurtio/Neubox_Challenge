const fs = require('fs');
stdin = process.openStdin();

input = '';

stdin.on('data', (chunk) => input += chunk)

stdin.on('end', () => split());

let instructionLength = [];
let instruction = [];
let msgLength;
let msg;

let aux = [[], []];
let counting = [0, 0];
let response = ['NO', 'NO'];

const split = () => {
    const lines = input.split('\n');

    const linea1 = lines[0].split(' ');
    instructionLength[0] = parseInt(linea1[0]);
    instructionLength[1] = parseInt(linea1[1]);
    msgLength = parseInt(linea1[2]);
    instruction[0] = lines[1].split('');
    instruction[1] = lines[2].split('');
    msg = lines[3].split('');
    decrypt();
}

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
    fs.writeFile('output.txt', response.toString().replace(',', '\n'), (err) => err ? console.log(err) : []);
}