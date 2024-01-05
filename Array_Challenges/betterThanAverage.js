// function betterThanAverage(arr) {
//     var sum = 0;
//     // calculate the average
//     sum = (6 + 8 + 3 + 10 -2 + 5 + 9)/7
//     var count = 0
//     for (var i = 0; i < arr.length; i++) {
//         if( sum > arr[i]){
//             count=arr[i]
//             count--;
//         }
//     }
//     // count how many values are greated than the average    
//     return count;
// }

// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


function betterThanAverage(arr) {
    var sum = 0;

    // Calculate the sum of all elements in the array
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Calculate the average
    var average = sum / arr.length;

    // Count how many values are greater than the average
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }

    // Return the count
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // Output: 4
