// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.
function addTwoNumbers() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return(alert(`The sum is ${num1 + num2}`));
}
// var add = addTwoNumbers();
// alert(add);

// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.
function minusTwoNumbers(){
   var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return(alert(`The difference is ${num1 - num2}`));
}

// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.
function multiplyNumbers(){
   var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return(alert(`The product is ${num1 * num2}`));
}

// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.
function divideNumbers(){
   var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return(alert(`The divided value ${num1 / num2}`));
}

// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.
function getRemainder(){
   var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return(alert(`The Reminder is ${num1 % num2}`));
}

// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".
function isPositive(){
   var userNumber = + prompt("Enter the number");
    if(userNumber > 0){
        alert("Positive")
    } else{
        alert("Not Positive")
    }
}