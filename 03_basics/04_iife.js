// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named iife
    console.log("DB CONNECTED");
})();

// ()()

(function orCode(){
    console.log("DB CONNECTED Two");
})()
;
// focus this
( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})("khalid")