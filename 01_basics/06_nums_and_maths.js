//++++++++++++++++++ Numbers ++++++++++++++++++//

const score = 719
// console.log(score);

const balance = new Number(313)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toString().toUpperCase);
// console.log(balance.toFixed(99));

const otherNumber = new Number(3013.56700)

// console.log(otherNumber.toPrecision(18))


const hundred = 100000000
// console.log(hundred.toLocaleString('en-IN'));

//++++++++++++++ Maths +++++++++++++++++++++//

// console.log(Math);  
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(6.6));
// console.log(Math.floor(9.9));
// console.log(Math.min(3,5,8,9));
// console.log(Math.max(3,5,8,9));


console.log(Math.random());   // values comes b/w 0 and 1 .
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);