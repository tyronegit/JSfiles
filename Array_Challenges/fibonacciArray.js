function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    // var i;
    var fibArr = [0, 1];
    // your code here
    for (i = 2; i < n; i++) {
        // Calculate the next Fibonacci number by adding the last two numbers in the array
        // Translated to JavaScript:
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr;

}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
