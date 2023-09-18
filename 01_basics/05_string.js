//  string as a primitive datatyep

const name = "khalid"    
const repoCount = 50

console.log(name + repoCount + "Value");


console.log(`This is my name ${name} and this is my repocount ${repoCount}`);


// String as an object 

const gameName = new String("Khalid-kd-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5, 7)
console.log(anotherString);

const newStringOne ="    Khalid    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://khalid.com/khalid%20akhtar"
console.log(url.replace('%20', '-'));

console.log(url.includes("shubham"));

console.log(gameName.split("-")); /* results came in array
