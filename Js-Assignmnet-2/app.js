//     Q1 
//     1. Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."
function Age() {
    var userAge = +prompt("Please enter your Age!");
    if (userAge >= 18) {
        alert("You are an adult.")
    } else {
        alert("You are Minor.")

    }
}
// Q2
// 2. Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".
function Positive() {
    var userNumber = +prompt("Please enter a number!");
    if (userNumber > 0) {
        alert(`${userNumber} is Positive number`)
    } else {
        alert(`${userNumber} is negative number`)
    }
}


// Q3
// 3. Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".

function Even() {
    var userNumber = +prompt("Please enter a number!");
    if (userNumber % 2 === 0) {
        alert(`${userNumber} is Even number`)
    } else {
        alert(`${userNumber} is Odd number`)
    }
}

// Q4
// 4. Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

function Access() {
    var userPosition = prompt("Please Your Position!");
    if (userPosition === "admin") {
        alert(`Welcome, ${userPosition}!`)
    } else {
        alert(`${userPosition} is denied to Access`)
    }
}

// Q5  
// 5. Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

function sameNumber() {
    var userNumber1 = +prompt("Please Your  First Number!");
    var userNumber2 = +prompt("Please Your Second Number!");
    if (userNumber1 === userNumber2) {
        alert(`Both numbers are the same`)
    } else {
        alert(`The numbers are different`)
    }
}


// Q6
// 6. Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".
function greaterNumber() {
    var userNumber1 = +prompt("Please Your  First Number!");
    var userNumber2 = +prompt("Please Your Second Number!");
    if (userNumber1 > userNumber2) {
        alert(`First number ${userNumber1} is greater then Second number ${userNumber2}`)
    } else {
        alert(`Second number ${userNumber2} is greater then First number ${userNumber1}`)
    }
}

// Q7
// 7. Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

function BigNumber() {
    var userNumber = +prompt("Please your Number!");
    if (userNumber > 100) {
        alert(`The given Number ${userNumber} is Too big!`)
    } else {
        alert(`The given Number ${userNumber} is Within range!`)
    }
}


// Q8
// 8. Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

function passNumber() {
    var userNumber = +prompt("Please your Number!");
    if (userNumber >= 50) {
        alert(`You passed!`)
    } else {
        alert(`You failed.`)
    }
}

// Q9
// 9. Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."
function temperature() {
    var userTemp = +prompt("Please Temperature!");
    if (userTemp > 30) {
        alert(`It's hot!`)
    } else {
        alert(`It's not hot.`)
    }
}

// Q10 
// 10. Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".
function zeroChecker() {
    var userNumber = +prompt("Please Enter a Number!");
    if (userNumber === 0) {
        alert(`Zero`)
    } else {
        alert(`Not zero`)
    }
}

// Q11
// 11. Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."
function citizenChecker() {
    var userAge = +prompt("Please Enter your Age!");
    if (userAge >= 60) {
        alert("You are a senior citizen.")
    } else (
        alert("You are not a senior.")

    )
}

// Q12
// Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"
function Alice() {
    var userName = prompt("Enter your name!");
    if (userName === "Alice") {
        alert("Hi, Alice!")
    } else (
        alert("You're not Alice!")
    )
}

// Q13
// 13. Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".
function Password() {
    var userPassword = +prompt("Enter your Password!");
    if (userPassword === 12345) {
        alert("Correct password")
    } else (
        alert("Wrong password")
    )
}

// Q14
// 14. Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"
function Time() {
    var userTime = +prompt("Enter Time!");
    if (userTime < 12) {
        alert("Good morning!")
    } else (
        alert("Good afternoon!")
    )
}

// Q15
// 15. Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".
function Divisible() {
    var userNumber = +prompt("Enter a number to check number divisible by 5!");
    if (userNumber % 5 === 0) {
        alert("Divisible by 5")
    } else (
        alert("Not Divisible by 5")
    )
}

// Q16
// 16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"
function Divisible() {
    var userNumber = +prompt("Enter a number to check number divisible by 5!");
    if (userNumber % 5 === 0) {
        alert("Divisible by 5")
    } else (
        alert("Not Divisible by 5")
    )
}

// Q17
// 16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"
function Play() {
    var userGame = prompt("Want to play a game (yes/no).");
    if (userGame === "yes") {
        alert("Let's play!")
    } else (
        alert("Maybe next time!")
    )
}
// Q18
// 17. Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"
function color() {
    var userColor = prompt("Enter the Color name!");
    if (userColor === "blue") {
        alert("Cool choice!")
    } else (
        alert("Interesting color!")
    )
}
// Q19
// 18. Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".
function day() {
    var userDay = prompt("Enter day of the week!");
    if (userDay === "sunday") {
        alert("Weekend !")
    } else (
        alert("Weekday !")
    )
}
// Q20
// 19. Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."
function Fruit() {
    var userFruit = prompt("Enter Fruit name you want!");
    if (userFruit === "banana" || userFruit === "apple") {
        alert("We have that!")
    } else (
        alert("Sorry, out of stock.")
    )
}
// Q20
// 20. Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."
function start() {
    var userStart = prompt("Enter eigther you want to start or not!");
    if (userStart === "start") {
        alert("Game started!")
    } else (
        alert("Waiting for input...")
    )
}

// 13. Order Processing Status
// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed
function orderProcessing() {
    var payment = prompt("Have you paid!").toLowerCase();
    var shipmet = prompt("Have you shipped!").toLowerCase();
    if (payment === "completed" && shipmet === "shiped") {
        alert("Order on the way");
    } else if (payment === "completed" && shipmet !== "shiped") {
        alert("Preparing your order");
    } else if (payment !== "completed") {
        alert("Awaiting payment");
    } else {
        alert("Payment failed")
    }
}


// 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

function batteryChecker() {
    var batteryLevel = +prompt("Enter the Battery level");
    var batteryStatus = prompt("Enter the Battery Status").toLowerCase();
    if (batteryLevel === 100) {
        alert("Fully Charged");
    } else if (batteryLevel < 100 && batteryStatus === "charging") {
        alert("Charging...");
    } else if (batteryLevel < 20 && batteryStatus !== "charging") {
        alert("Low Battery");
    } else {
        alert("Battery OK");
    }
}

// 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers

function browserCompatibility() {
    var browser = prompt("Enter the Browser name!").toLowerCase();
    var device = prompt("Enter the Device name!").toLowerCase();
    if (browser === "chrome" && device === "desktop") {
        alert("Full features enabled");
    } else if(browser === "chrome" && device === "mobile"){
          alert("Limited mobile features");
    } else{
        alert("Please switch to Chrome");
    }
}











