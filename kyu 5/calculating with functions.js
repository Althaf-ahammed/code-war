// This time we want to write calculations using functions and get the results.

//  Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(operator) {return !operator ? 0 : operator(0);}
function one(operator) {return !operator ? 1 : operator(1);}
function two(operator) {return !operator ? 2 : operator(2);}
function three(operator) {return !operator ? 3 : operator(3);}
function four(operator) {return !operator ? 4 : operator(4);}
function five(operator) {return !operator ? 5 : operator(5);}
function six(operator) {return !operator ? 6 : operator(6);}
function seven(operator) {return !operator ? 7 : operator(7);}
function eight(operator) {return !operator ? 8 : operator(8);}
function nine(operator) {return !operator ? 9 : operator(9);}

function plus(number) {return (anotherNumber) => anotherNumber + number ;}
function minus(number) {return (anotherNumber) => anotherNumber - number ;}
function times(number) {return (anotherNumber) => anotherNumber * number ;}
function dividedBy(number) {return (anotherNumber) => Math.floor(anotherNumber / number )}