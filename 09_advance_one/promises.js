const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DBcalls , cryptography, network
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(()=>{
    console.log("Promise Consume");
})

//2

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2 is completed");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async task 2 is resolve");
})

//3

const PromiseThree = new Promise((resolve,reject)=>{
   setTimeout(()=>{
            resolve({username: "khalid", email: "khas@urooz.com"})
   },1000) 
})
PromiseThree.then(function(user){
    console.log(user);
})

//4 Method one to handle error(Using then and catch)

const promisefour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"khalid", password: 147588})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is finally resolved or rejected");
})

//5 One more method to handeled error(Using Try and catch)

const promiseFive = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Javascript", password: 147})
        }
        else{
            reject("ERROR: Js went wrong")
        }
    },1000)
})

async function consumepromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }

}

consumepromiseFive()