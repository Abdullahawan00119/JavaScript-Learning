// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.
function addTwoNumbers() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return (alert(`The sum is ${num1 + num2}`));
}
// var add = addTwoNumbers();
// alert(add);

// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.
function minusTwoNumbers() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return (alert(`The difference is ${num1 - num2}`));
}

// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.
function multiplyNumbers() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return (alert(`The product is ${num1 * num2}`));
}

// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.
function divideNumbers() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return (alert(`The divided value ${num1 / num2}`));
}

// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.
function getRemainder() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    return (alert(`The Reminder is ${num1 % num2}`));
}

// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".
function isPositive() {
    var userNumber = + prompt("Enter the number");
    if (userNumber > 0) {
        alert("Positive")
    } else {
        alert("Not Positive")
    }
}

// 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".

function isNegative() {
    var userNumber = +prompt("Enter the number!");
    if (userNumber < 0) {
        alert("Negative");
    } else {
        alert("Not Negative");
    }
}

// 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".
function checkEven() {
    var userNumber = +prompt("Enter the Number!");
    if (userNumber % 2 === 0) {
        alert(`${userNumber} is Even`);
    } else {
        alert(`${userNumber} is Odd`);
    }
}
// 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".

function isEqual() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    if (num1 === num2) {
        alert("Equal");
    } else {
        alert("Not Equal");
    }
}


// 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".
function Greater() {
    var num1 = + prompt("Enter the first number");
    var num2 = + prompt("Enter the second number");
    if (num1 > num2) {
        alert("Greater");
    } else {
        alert("Samller");
    }
}


// 11. getFullName
// Write a function that takes a first name and last name, and returns the full name.
function getFullName() {
    var firstName = prompt("Enter you First name!");
    var secondName = prompt("Enter you Second name!");
    return (alert(`Your Full name is ${firstName} ${secondName}`))
}


// 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40
function getGrade(number) {
    if (number < 0 || number > 100) {
        return "out of range !"
    } else if (number >= 40) {
        return "Pass!"
    } else {
        return "Fail!"
    }
}
var number = +prompt("Enter the obtained Numbers!");
var result = getGrade(number);
alert(result)





