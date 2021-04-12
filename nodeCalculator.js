var readlineSync = require("readline-sync")
var firstNumber = readlineSync.questionInt("Please enter your first number:  "); //storing the number
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation: add, sub, mul, div ");

//Functions below adds two numbers.
function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
//Function below substracts two numbers.
function subTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
//Function below multiples two numbers.
function mulTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
//Function below devides two numbers. 
function divTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

//Function that accepts 3 parameters.

function myCalculator(firstNumber, secondNumber, enteredOperator){
if(enteredOperator == "add"){
    console.log("Result of: " + addTwoNumbers(firstNumber, secondNumber));
} else if(enteredOperator == "sub"){
    console.log("Result of: "+ subTwoNumbers(firstNumber, secondNumber));
}else if(enteredOperator == "mul"){
    console.log("Result of: " + mulTwoNumbers(firstNumber, secondNumber));
} else if(enteredOperator == "div"){
    console.log("Result of: " + divTwoNumbers(firstNumber, secondNumber));
}
}
myCalculator(firstNumber, secondNumber, enteredOperator);

