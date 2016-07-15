/*
 When we use "higher order functions" the variables that exist
 in their "enclosing scope", sometimes called the "environment"
 are captured as well. Lets see an example of this:
*/

function enclosingFunction() {

    var counter = 0;//declare local variable named counter assigned with 0
    return function() { //return the anonymos function that will change local variable according to declarations in body
        counter += 1; // increment counter by 1
        console.log(counter); // print value of counter
    }
}

var closure = enclosingFunction(); //declare variable called closure and setting it equal to the function enclosingFunction

// What will log on these lines?
closure();
closure();
closure();
closure();
console.log("==========")

//returns 1, 2, 3, 4 because the counter will keep the current value and not reset to 0. 

// What about these?
var closureTwo = enclosingFunction();
closureTwo();
closureTwo();
closureTwo();
closureTwo();

// Does that result surprise you? Does it make sense? Discuss with
// your partner why you think this happens.
