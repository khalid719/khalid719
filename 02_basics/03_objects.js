// singleton
// Object.create

// Object literals

// This is how we define objects and symbol.

const mySym = Symbol("key1")  

const Jsuser = {
    name : "Khalid",
    "full name" : "khalid Akhtar",
    [mySym] : "key1",       // This is how we define symbol.
    age : 21,
    location : "Gurugram",
    email : "khalid@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"]
}

// This is how we access Objects and Symbol .

// console.log(Jsuser.email)  // not a good method to access
// console.log(Jsuser["email"]) // It is a very good way to access the data.
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym])   /* Symbol is defined in a very interseting manner */

// This is how we change the objects value.

Jsuser.email = "khalid@chatgpt.com"
// Object.freeze(Jsuser) 
Jsuser.email = "khalid@microsoft.com"

// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());