const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
   // console.log(input)
    const [ c, d ] = input
  //  const a = Number(input[0])
  //  const b = Number(input[1])
  //  const printA = `a = ${a}`
  //  const printB = `b = ${b}`
  //  console.log(printA)
  //  console.log(printB)
  //  console.log(input)
  //  console.log(a)
  //  console.log(b)
  //  console.log(c)
  //  console.log(d)
    console.log(`a =`, c)
    console.log(`b =`, d)

});