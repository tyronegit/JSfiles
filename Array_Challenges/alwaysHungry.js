// function alwaysHungry(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "food") {
//             console.log("yummy, yummy");
//             return;
//         }
//     }
//     console.log("I'm hungry");
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"


// function alwaysHungry(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "food") {
//             console.log("yummy, yummy");
//             return;
//         }else if (arr[i] !== "food") {
//             console.log("I'm hungry");
//             return;
//         }
//     }

//     // console.log("I'm hungry");
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

function alwaysHungry(arr) {
    var foundFood = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food" || arr[i] === "pie") {
            console.log("yummy");
            foundFood = true;
        }
    }

    if (!foundFood) {
        console.log("\n"+ "I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy, yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


