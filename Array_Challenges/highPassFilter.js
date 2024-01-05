// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         cutoff= []
//         if(filteredArr > cutoff){
//         console.log(arr[i], cutoff[5])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// function highPass(arr, cutoff) {
//     var filteredArr = arr.filter(function (element) {
//         return element > cutoff;
//     });

//     return filteredArr;
// }

// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// highPass has to 2 parameters. 1 for the array and one for the cutoff
function highPass(arr, cutoff) { 
    var filteredArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            // this will push indexs that are greater than the cutoff
            //to add elements that pass the condition to the filteredArr array.
            filteredArr.push(arr[i]); 
        }
    }

    return filteredArr;
}

// highPass has to 2 parameters. 1 for the array and one for the cutoff
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
