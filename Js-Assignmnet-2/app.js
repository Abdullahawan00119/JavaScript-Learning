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
function citizenChecker(){
    var userAge = +prompt("Please Enter your Age!");
    if(userAge >= 60){
        alert("You are a senior citizen.")
    } else(
        alert("You are not a senior.")

    )
}