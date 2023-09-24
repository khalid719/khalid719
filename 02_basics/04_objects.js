
const tinderuser = {
 name : "khalid",
 id : "719abc",
 isLoggedIn : true, 
 location : "Haryana",
email : "khalid719@wahycode.com",
activity : ["Monday", "Tuesday", "wednesday"]
}
// console.log(tinderuser);

const signaluser = {}
signaluser.name = "Khalid"
signaluser.id = "718xyz"
signaluser.email = "khalid719wahy@gmail.com"
signaluser.isLoggedIn = false
signaluser.activity = ["friday", 'saturday']
 
// console.log(signaluser) 


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "khalid",
            lastname: "akhtar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  

const obj1 ={1: "a", 2:"k"}
const obj2 ={3: "b", 3:"h"}

// const obj3 = {obj1 , obj2} 

// // const obj3 = Object.assign( obj1 , obj2)
// const obj4 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(tinderuser);

// console.log(Object.values(tinderuser));
// console.log(Object.keys(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const{courseInstructor: instructor} = course 
const{coursename :name} = course 

console.log(instructor);
console.log(name);


//JSON

// {
//     "name":"hitesh",
//     "coursename":"JS in hindi",   // keys are also strings.
//     "price":"free"
// }

/// API's are JSON format document.
