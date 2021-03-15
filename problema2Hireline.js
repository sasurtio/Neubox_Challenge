const prompt = require('prompt');

prompt.start();

let n;
let round = [];

const calculate = (turns) => {
    let distance = 0;
    turns.forEach(turn => {
        const diff = turn[0] - turn[1];
        if (Math.abs(diff) > Math.abs(distance)) distance = diff;
    });
    if (distance > 0) console.log(1, distance);
    else console.log(2, -distance);
}
prompt.get(['n'], (err, result) => {
    n = parseInt(result.n);

    round = Array.from(new Array(n), (x, i) => 'round' + (i+1));
    prompt.get(round, (err, result) => {
        const turns = [];
        for (const round in result) turns.push(result[round].split(' '));
        calculate(turns);
    });
});

// n = 5;
// round = [
//     [140, 82],
//     [89, 134],
//     [90, 110],
//     [112, 106],
//     [88, 90],
// ]
// calculate(round);