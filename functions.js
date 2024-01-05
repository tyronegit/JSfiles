function counter() {    
    for(var num = 0; num <= 5; num++){
        console.log(num);
    }
}

counter();    // run the function
console.log("\nRunning the counter the second time\n")
counter();    // run the function again
    

function counter2(startNum) {    //The function is expecting some PARAMETER in order to run
    for (var num = startNum ; num >= 0 ; num--) {        
        console.log(num);    
    }
}

console.log("\nWith 6 as a parameter")
counter2(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
console.log("\nWith 3 as a parameter")
counter2(3);    // Passing in an ARGUMENT of 3, the console would display: 3, 2, 1, 0
    

function createArray(num) {        
    var newArray = [];       
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);        
    }
}

console.log("The results of none return function example:")
createArray(5)
//The newArray only exists inside of the function.  Out here it no longer exists!

function createArray(num) {        
    var newArray = [];        
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);        
    }        
    return newArray;        // added the return statement
}
var y = createArray(5);        // now y is the variable that is calling on createArray
console.log(y)