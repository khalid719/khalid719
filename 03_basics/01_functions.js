

function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("D");
}

// sayMyName()

// function multiplyTwoNumbers(number1, number2){
//     console.log(number1 * number2);
// }


// function multiplyTwoNumbers(number1, number2){
    // let result = number1 * number2
    // return result
    //   return number1 * number2
// }

//   const result = multiplyTwoNumbers(5,3) 
//   console.log("Results:", result);


// function loginUserMessage(username){
//      if(username === undefined){
//         console.log("please enter a username");
//         return
//      }

//     return `${username} Just Logged In`
// }

// console.log(loginUserMessage("khalid"))

// // console.log( node 03_basics/01_functions.js



function multiplyTwoNumbers(number1, number2){
    let product = number1 * number2
    return product
}

//  const product = multiplyTwoNumbers(4, 5)
//  console.log(product);


// function userLoggedInMessage(username){
//     if(username == undefined){
//     console.log("Undefined just logged in")
//     return
// }
//    console.log(username, "Just logged In");
//  }

// userLoggedInMessage("khalid")
// userLoggedInMessage("")
// userLoggedInMessage()


// function payment(amount){
//     return `${amount} payment is received`
// }
//  console.log(payment("$500000"));


// function addToCart(...num1){
//     console.log(...num1);
//     return 
// }
// addToCart(200, 300, 400, 600)


const user = {
    username: "khalid",
    price: 299
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}
// handleObject(user)

                                
handleObject({
    username: "WAHYCODE",
    price: 299
})

const myNewArray = [200, 300, 400, 500, 800]

function returnSecondValue(getArray){
      return getArray[3]
}
console.log(returnSecondValue(myNewArray));















