const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const a = Number(input[0])
    const b = Number(input[1])
    const printA = `a = ${a}`
    const printB = `b = ${b}`
    console.log(printA)
    console.log(printB)
});