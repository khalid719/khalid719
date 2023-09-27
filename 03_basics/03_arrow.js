
const user = {

    username: "khalid",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username= "Elon"
// user.welcomeMessage()

// console.log(this);

// "this " only behave on the contexual manner , if it is printted in object.

// function code(){
//     
//     console.log(username);
// }

// code()


// const code = function () {
//     let username = "Khalid"
//     console.log(this.username);
// }
const code = () => {
    let username = "Khalid"
    console.log(this);
}

// code()

 // explicit return
// const addTwo = (num1, num2) => {
//     return  num1 + num2
// }


// Implicit return

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Khalid"})

console.log(addTwo(3 , 4));

