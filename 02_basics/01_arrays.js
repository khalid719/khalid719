// array 

const myArr = [1, 2, 3, 4, 5, 6, "khalid"]
const myCricketers = ["Dhoni", "Virat", "Sohaib"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Arrays Method

// myArr.push(7)  // It inserts the value at the end of array.
// myArr.push(8)
// myArr.pop()  // It removes the last value of array.

myArr.unshift(0) // It inserts the value at the start of array.
myArr.shift()

// console.log(myArr.indexOf("khalid"));   // it will give you index of elements.
// console.log(myArr.indexOf("Akhtar"));

// console.log(myArr.includes("khalid"));  It gives you value in Boolean.

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof(myArr));
// console.log(typeof(newArr));


// Slice and Splice

console.log("A:", myArr);


const myn1 = myArr.slice(0, 3)
console.log("B:", myArr);

console.log( "Slice Of A: " , myn1); 

console.log("C: ", myArr);

const myn2 = myArr.splice(0, 3) 
console.log("D:",myArr);
console.log("splice Of C: ", myn2);
