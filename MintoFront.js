function minToFront(ary) {
    // declare min variable
    var least = ary[0];
    //declare indx variable
    var indx = 0;
    // loop through array for minimum value
    for (var i = 1; i < ary.length; i++){
        if (ary[i] < least) {
            least = ary[i];
            indx = i;
        }
    }
    //loop through array to place min at the front of the array
    for (var x = indx; x > 0; x--){
        var temp = ary[x];
        ary[x] = ary[x-1];
        ary[x-1] = temp;
    }
    return ary;
}


console.log(minToFront([4,2,1,3,5]))