// Push Front
function pushFront(ary, add) {
    for(let i =ary.length; i >= 0; i--) {
        ary[i] = ary[i -1]

    }

    ary[0] = add

    return ary    
}
console.log("Push Front")
console.log(pushFront([9,7,3,2], 6))
console.log(pushFront([177], 23))
console.log("\n")



// Pop Front
function popFront(ary){

    // save initial index in array
    let initValue = ary[0]

    // move through loop shifting all values to the left
    for(let i = 0; i < ary.length; i++) {
        ary[i] = ary[i + 1]
    }
    // remove value from the length of the array by one
    ary.length = ary.length - 1
    // console log
    console.log(ary)
    // return removed value
    return initValue
}
console.log("Pop Front")
console.log(popFront([18,45,79,17]))
console.log(popFront([97,109,248,125]))
console.log("\n")


// Insert At
function insertAt(ary, indx, val) {
    // loop array while shifting indexs to the right until desired index is present
    for(let i= ary.length; i >= indx; i--) {
        ary[i] = ary[i - 1]
    }
    // set ary[indx] to equal provided value
    ary[indx] = val
    // return provided array
    return ary

}
console.log("Insert At")
console.log(insertAt([451,367,34], 2, 618))
console.log(insertAt([67,51,107], 3, 92))
