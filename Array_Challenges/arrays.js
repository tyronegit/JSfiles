var purchasesWeekFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
    45.78,
    // ...more purchases
];

        var total = 0;
        for(var i=0; i<purchasesWeekFeb15.length; i++) {
            total += purchasesWeekFeb15[i];
        }
        console.log("The total spent was: $" + total);
        
        