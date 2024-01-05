function reverseArray(ary) {
    for(let i = 0; i < ary.length / 2; i++) {
        // swap values store 18 which is index 0 in the array
        let tmp = ary[i]
        // move 72 to index 0
        ary[i] = ary[ary.length - 1 - i]
        // replace 72 with value 18 into index 3 of array
        ary[ary.length -1 -i] = tmp
    }
}

let ary1 = [18, 23, 94, 72]
console.log("Array ary1 results:")
reverseArray(ary1)
console.log(ary1)

// console.log("\n")

let ary2 = [11, 44, 78, 67, 81]
console.log("Array ary2 results:")
reverseArray(ary2)
console.log(ary2)

function rotateArr(ary, indexBy) {

    // [1, 2, 3, 4, 5], index to the right by 2
    // [5, 1, 2, 3, 4]
        /* 
        Loop through theamount of roatations needed
            To rotate to the right one:
            1. Create a temp variable that holds the last Value
            2. index all the items in the array to the right by one index. This is a for loop.
            3. Put the temp value at the beginning of the array 

        */

    // Loop through all the rotations
    for(let i = 0; i < indexBy; i++){
        // Handle the single rotation
        let temp = ary[ ary.length -1]
        for(let k = ary.length -2; k >= 0; k--){
            
        }


    }

}
