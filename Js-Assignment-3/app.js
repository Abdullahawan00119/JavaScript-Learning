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
function getGrade() {
    var number = +prompt("Enter the obtained Numbers!");
    if (number < 0 || number > 100) {
        alert("out of range !");
    } else if (number >= 40) {
        alert("Pass!");
    } else {
        alert("Fail!");
    }
}


// 13. isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".

function isTeenager() {
    var userAge = +prompt("Enter your age!");
    if (userAge >= 13 && userAge <= 19) {
        alert("Teenager");
    } else {
        alert("Not a Teenager");
    }
}

// 14. greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".
function greetUser() {
    var userName = prompt("Please Enter your Name!");
    alert(`Hello, ${userName}!`)

}
// 15. isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".
function isEligibleToVote() {
    var userAge = +prompt("Enter your age!");
    if (userAge >= 18) {
        alert("Eligible");
    } else {
        alert("Not Eligible");
    }
}

// 16. findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).
function findAbsoluteValue() {
    var userNumber = +prompt("Please Enter the Number!");
    if (userNumber < 0) {
        alert(-userNumber);
    } else {
        alert(userNumber);
    }
}

// 17. checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise

function checkTemperature() {
    var temperature = +prompt("Enter the Temperature!");
    if (temperature > 30) {
        alert("Hot");
    } else if (temperature < 10) {
        alert("Cold");
    } else {
        alert("Normal!")
    }
}

// 18. getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different
function getTriangleType() {
    var num1 = +prompt("Enter the First Side!");
    var num2 = +prompt("Enter the Second Side!");
    var num3 = +prompt("Enter the Third Side!");
    if(num1 === num2 && num2 === num3){
        alert("Equilateral!")
    } else if(num1 === num2 || num2 === num3 || num1 === num3){
        alert("Isosceles!")
    } else {
        alert("Scalene!")
    }
}