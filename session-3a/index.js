// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

var a = 5;
var b = 10;
var c = a + b;

// Expected output 15
console.log("Original output: " + c);

a = 20;

// Expected output 30, but it's actually 15
console.log("After a has been updated: " + c);

c = a + b;

// Expected output 30
console.log("After c has been updated to use the new a: " + c);





// BONUS ACTIVITY: What we entered into the console in session 2:
/*

5
2 + 2
'Hello'
'Hey,' + 'how are you?'

*/



// FUNCTIONS

function sayHey() {
    console.log("Hey!");
}
