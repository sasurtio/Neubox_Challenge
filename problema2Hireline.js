const fs = require('fs');
stdin = process.openStdin();

input = '';

stdin.on('data', (chunk) => input += chunk)
stdin.on('end', () => calculate());

const calculate = () => {
    const lines = input.split('\n');
    const n = parseInt(lines.shift);

    let distance = 0;
    lines.forEach(line => {
        const turn = line.split(' ');
        const diff = turn[0] - turn[1];
        if (Math.abs(diff) > Math.abs(distance)) distance = diff;
    })

    let response;
    if (distance > 0) response = '1 ' + distance;
    else response = '2 ' + -distance;

    fs.writeFile('output.txt', response, (err) => err ? console.log(err) : []);
}