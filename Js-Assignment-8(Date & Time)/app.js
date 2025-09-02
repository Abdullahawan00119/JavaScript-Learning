// 1. Custom Date Formatter
// Write a function that takes a Date object and returns a formatted string like:
// "Saturday, 9 August 2025".


// function check(){
//     let newDate = new Date().toDateString();
//     return  console.log(newDate)
// }

// 2. Elapsed Time in Minutes
// Given two timestamps, calculate how many minutes have passed between them.


// 3. Age Calculator from Full Birthdate
// Create a function that accepts a full birthdate (YYYY-MM-DD) and calculates the age in
// years, months, and days.

// function check() {
//     let dob = document.querySelector("#dob");
//     let result = document.querySelector("#result");
//     let birthDate = new Date(dob.value);
//     if (!dob.value) {
//         return alert("please Select the DOB");
//     }
//     let currenDate = new Date();
//     let birthYear = currenDate.getFullYear() - birthDate.getFullYear();
//     let birthMonth = currenDate.getMonth() - birthDate.getMonth();
//     let birthDay = currenDate.getDate() - birthDate.getDate();
//     if (birthDay < 0) {
//         birthMonth -= 1;
//         let previousMonth = new Date(currenDate.getFullYear(), currenDate.getMonth(), 0).getDate();
//         birthDay += previousMonth;
//     }
//     if (birthMonth < 0) {
//         birthYear -= 1;
//         birthMonth += 12;
//     }
//     result.innerHTML = `Your age is ${birthYear} year's , ${birthMonth} months and ${birthDay} day's `;

// }


// 4. Get First Day of Current Month
// Return the date of the first day of the current month.

// function firstDayMonth() {
//     let newDate = new Date();
//     let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDate();
//     return firstDay;
// }
// console.log(firstDayMonth());


// 5. Get Last Day of Current Month
// Write a function that returns the last date (e.g., 31, 30, or 28/29) of the current month.

// function lastDayMonth() {
//     let newDate = new Date();
//     lastDate = new Date(newDate.getFullYear(), newDate.getMonth(), 29).getDate();
//     return lastDate;

// }

// console.log(lastDayMonth());

// 6. Human-Friendly "Time Ago"
// Create a function that returns strings like:
// ○ "Just now"
// ○ "5 minutes ago"
// ○ "2 hours ago"
// ○ "1 day ago" based on a past timestamp.

// function timeAgo() {
//     let pastTimeDuration = document.querySelector("#time").value;
//     let pastTime = new Date(pastTimeDuration).getTime();
//     let currentTime = Date.now();
//     let diffMS = currentTime - pastTime;
//     let diffS = Math.floor(diffMS / 1000);
//     let diffM = Math.floor(diffS / 60);
//     let diffH = Math.floor(diffM / 60);
//     let diffD = Math.floor(diffH / 24);
//     if (!pastTimeDuration) {
//         return "Enter the time"
//     }
//     if(pastTimeDuration > currentTime){
//         return "Past time should not be greater then current time"
//     }
//     if (diffS < 60) {
//         return "just Now"
//     } else if (diffM < 60) {
//         if (diffM === 1) {
//             return diffM + " Minute ago"
//         } else {
//             return diffM + " Minutes ago"
//         }
//     } else if (diffH < 24) {
//         if (diffH === 1) {
//             return diffH + " Hour ago"
//         } else {
//             return diffH + " Hours ago"
//         }
//     } else {
//         if (diffD === 1) {
//             return diffD + " Day ago";
//         } else {
//             return diffD + " Days ago"
//         }
//     }

// }



// 7. Countdown Timer
// Create a simple countdown function to a future date (e.g., New Year), showing days,
// hours, minutes, seconds remaining.
// let intervalfunction;
// function check() {
//     clearInterval(intervalfunction)
//     intervalfunction = setInterval(function () {
//         let futureDateInput = document.querySelector("#date").value;
//         let futureDate = new Date(futureDateInput).getTime();
//         console.log(futureDate);
//         let result = document.querySelector("#result");
//         let currentDate = new Date().getTime();
//         let countdown = futureDate - currentDate;
//         let dateS = Math.floor(countdown / (1000)) % 60;
//         let dateH = Math.floor(countdown / (1000 * 60 * 60)) % 24;
//         let dateD = Math.floor(countdown / (1000 * 60 * 60 * 24));
//         let dateM = Math.floor(countdown / (1000 * 60)) % 60;
//         result.innerHTML = `${dateD} days ${dateH} hours ${dateM} minutes and ${dateS} seconds are remaining`

//     }, 1000)
// }




