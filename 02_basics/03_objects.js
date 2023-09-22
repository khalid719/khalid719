// singleton
// Object.create

// Object literals
const JSuser = {
    name : "Khalid",
    "full name" : "khalid Akhtar",
    age : 21,
    location : "Gurugram",
    email : "khalid@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JSuser.email)  // not a good method to access
console.log(JSuser["email"]) 