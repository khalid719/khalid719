//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++===

//1).Stack (Primitive):Copy of data  2).Heap (Non-Primitive):Original path

let myYoutubename = "ACP"

let anothername = myYoutubename

console.log(myYoutubename);
console.log(anothername);  

anothername = "TSM"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "khalid@google.com"

console.log(userOne.email);
console.log(userTwo.email);