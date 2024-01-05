// Remove Blanks
function removeBlanks(stg) {
    // make a new string initialized to a blank string
    let newStg = ''

    // loop through the string
    for (let i = 0; i < stg.length; i++ ){
        // if current character is not a space
        if(stg [i] != ' ') {
                // then concatenate with a new string
                newStg += stg[i]
        }        
    }
        // return new string
        return newStg
}     
console.log("Remove Blanks")
console.log(removeBlanks("Football is an intertaining spectacle when your favorite team wins"))
console.log(removeBlanks("Con sis tent behav ior is cr itic al i n ach ieving su cess!"))
console.log("\n")


// Get Digits
function getDigits(stg){
    // create a new string
    let newNumStg = ''

    //forloop char in a string
    for(let char in stg) {
        // if character is a number
        if(!isNaN(stg[char])){
            // concate into a new string
            newNumStg += stg[char]
        }

    }

    // console.log(Number(newNumStg))

    // turn string to numbers
    // return new string(numbers)
    return Number(newNumStg)
}

console.log("Get Digits")
console.log(getDigits("ggf1GHH6???9!!5ll4xx79wer23!"))
console.log(getDigits("efgh9hijk7654lmnop9876q1")) 
console.log("\n")


// Acronyms
function acronym(stg) {
    let strsArr = stg.split(' ')
    let acronymStg = ''

   // loop through strsArr
    for(let str in strsArr) {
        // retrieve the first letter of the string
        if(strsArr[str].length > 0){
            acronymStg += strsArr[str] [0].toUpperCase()
        }
        
            // convert first letter to uppercase
            // concate to acronym string
    }
        // return acronym string
        return acronymStg

}

console.log("Acronyms")
console.log(acronym("the sun raises in the east and sets in the west"))
console.log(acronym("this is because the earth spins toward the east"))
console.log("\n")



// Count Non-Spaces
function countNonSpaces(stg) {
    // start counter variable
    let counter = 0
    // loop through string
    for (let char in stg) {
        // if character not a space
        if(stg[char] != ' '){
            // increment counter
            counter ++
        } 
    
    }
    
    // return counter
    return counter
}

console.log("Count Non-Spaces")
console.log(countNonSpaces("Now is the time for all good men to come to the aid of their country"))
console.log(countNonSpaces("the whole world is a masquerade"))
console.log("\n")


// Remove Shorter Strings
function removeShorterStrings(arry, lnth) {
    // create a new array
    let newStgs = []
    // create a nextIndex variable
    let nextIndx = 0

    // loop through array
    for(let value in arry){
        // if value greater than or equal to lnth
        if(arry[value].length >= lnth){
            // add value to new array
            newStgs[nextIndx++] = arry[value]
        }

    }        

    // return new array
    return newStgs
}
console.log("Remove Shorter Strings")
console.log(removeShorterStrings(['Testing', 'this', 'function', 'for', 'accurate', 'output.'], 4))
console.log(removeShorterStrings(['The', 'rain', 'is','falling', 'mainly', 'in', 'the', 'plains.'], 3))

