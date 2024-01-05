var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
console.log( "Array user: " + user + "\n");

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
user.push("jello");    
console.log("Array user implementing (.push): " + user + "\n");    // ["Dwight", "Schrute", "beetsbears@battlestar.com", "jello"]

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
user.pop();    
console.log("Array user implementing (.pop): " + user  + "\n");    // ["Dwight", "Schrute"]

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
console.log(user[0] + "\n");    // reading the value -- OUTPUT: Dwight    
user[1] = "Martin";    // updating the value 
console.log("'being updated by adding 'Martin' in index 1'"+ "\n")   
console.log("Updating the value: " + user);    // ["Dwight", "Martin", "beetsbears@battlestar.com"]


var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];  
console.log("\ndimenstrating .length and .pop")  
console.log(user.length);    // 3    
user.pop();    
console.log(user.length);    // 2
// var is a local declaration, while let is a universal declaration used only once per declaration. The let declaration requires a unique variable name