// for

for (let index = -2 ; index < 10; index++) {
    const element = index;
     if (element == 6) {
        // console.log("6 is the best number");
     }

    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner Loop Value: ${j} and outer loop ${i}`);
        // console.log(i , '*' , j , ' = ' , i*j );
        
    }
      // We can use both plus and commas to do this task.    
}
for (let i = 1; i <= 10; i++) {
   // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner Loop Value: ${j} and outer loop ${i}`);
       // console.log(i + '*' + j + ' = ' + i*j );
        
    }
     
}

let myArray = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of index is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of index is ${index}`);
    
}
