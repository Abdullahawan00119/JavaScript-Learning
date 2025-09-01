// console.log("Abdullah");

// const userName = "Abdullah";
// console.log(userName.toLocaleLowerCase());
// console.log(userName.toUpperCase());
// console.log(userName.length);

// console.log(userName.slice(0,5));
// console.log(userName.split(""));
// console.log(userNameArray);

// let input = document.querySelector("#input");
// const result = document.querySelector("#result");

// function checkPalandrom() {
//     palandrom = input.value.split("").reverse().join("");
//     console.log(palandrom);


//     if (palandrom === input.value) {
//         return result.innerHTML = "Palandrom ha"
//     } else {
//         return result.innerHTML = "Palandrom nahi ha"
//     }
// }
// console.log(userName.split("a"));


// let result = document.querySelector("#result");
// function head1() {
//     let randomNum = Math.ceil(Math.random() * 2);
//     console.log(randomNum);

//     if (randomNum === 1) {
//         return result.innerHTML = "YOU WON TOOS"
//     } else {
//         return result.innerHTML = "YOU LOSS THE TOSS"
//     }
// }

// let result1 = document.querySelector("#result");
// function Tail() {
//     let randomNum = Math.ceil(Math.random() * 2);
//     console.log(randomNum);

//     if (randomNum === 2) {
//         return result1.innerHTML = "YOU WON TOOS"
//     } else {
//         return result1.innerHTML = "YOU LOSS THE TOSS"
//     }
// } 


// string methods

// tolowercase
// touppercase
// slice
// split
// join
// replace
// replace all

// let userName = "Abdullah";
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.slice(1, 7));
// console.log(userName.split());        // Convert to array
// console.log(userName.split(""));      // Convert to array but Qutations marks make it in every letter separate in a string.

// console.log(userName.join());  // join an array into string 
// let mess = "Babar is the best batsman in the world. Babar breaks every record. Babar performance in world cups and ICC tournament is Bamboo. Virat appreciate Babar performance."
// console.log(mess.replace("Babar", "Abdullah"));
// console.log(mess.replaceAll("Babar", "Abdullah"));






// function check() {
//     let input = document.querySelector("#inputPalandrom");
//     let result = document.querySelector("#result");
//     let reverseInput = input.value.trim().toLowerCase().split("").reverse().join("");
//     console.log(reverseInput);

//     if (reverseInput === input.value.trim()) {
//          result.innerHTML = `${input.value} is a Palandrom`

//     } else {
//          result.innerHTML = `${input.value} is not a Palandrom`
//     }
//     input.value = " "
// }









//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof




let cities = ["Karachi", "Quetta", "Islamabad", "Faislabad", "Lahore"];
// let alphabets = [3, 2, 1]
// fruits.push("Abdullah")
// fruits.pop()
// fruits.unshift("Abdullah")
// fruits.shift()
// fruits.splice(1,3,"Abdullah")
// var sliceArrray = fruits.slice(1,5)
// console.log(sliceArrray);
//  var methodJoin = fruits.join("");
// console.log(methodJoin);
// console.log(cities.concat(fruits));
// console.log(fruits.sort());
// console.log(alphabets.sort());
// console.log(cities.reverse());
// console.log(cities.indexOf("Faislabad"));
// console.log(cities.includes("Islamabad"));



// function check() {
//     let fruits = ["apple", "banana", "orange", "pineapple", "watermelon", "melon", "mango", "peach"];

//     let input = document.querySelector("#input");
//     let result = document.querySelector("#result");

//     for (let i = 0; i < fruits.length; i++) {
//         if (input.value.trim().toLowerCase().includes(fruits[i])) {
//             result.innerHTML = `Included`
//             return;
//         }


//     }
//     result.innerHTML = "Not Included"

// }

// function check() {
//     let Vovel = 0;
//     let textArea = document.querySelector("#areaText").value.trim();
//     let result = document.querySelector("#result");
//     for (let i = 0; i < textArea.length; i++) {
//         if (textArea[i] === "a" || textArea[i] === "e" || textArea[i] === "i" || textArea[i] === "o" || textArea[i] === "u") {
//             result.innerHTML = `${Vovel += 1}`;
//         } else {

//             console.log("No vovel");
//         }

//     }
// }


// function count() {
//     let count = 0;
//     let textArea = document.querySelector("#textArea").value.replace(/\s/g, '');
//     let result = document.querySelector("#result");
//     for (let i = 0; i < textArea.length; i++) {
//         result.innerHTML = `${count += 1} are the total letters`;

//     }
// }
// in letter counter the .replace(/\s/g, '')  removes the all white spaces and tabs .
// .trim()  on removes the white spaces form start and end.


// let score = document.querySelector("#Score");
// let Out = document.querySelector("#Out");
// let totalField = document.querySelector("#Total");
// let scoreArray = [];
// let total = 0;
// let ouCount = 0;
// function bat() {
//     let randomNum = Math.floor(Math.random() * 7);
//     scoreArray.push(randomNum);

//     if (randomNum === 0) {
//         Out.innerHTML = ouCount += 1;
//     } else if (ouCount >= 10) {
//         alert("Game Over");
//     } else {
//         total += randomNum;
//         score.innerHTML = randomNum;
//         totalField.innerHTML = total;
//     }
//     console.log(scoreArray);
//     return;
// }
// let count = 0;
// let counter = setInterval(function () {
//     count += 1;
//     console.log(count);

// }, 1000);   //setInterval do repeat the function after the specific time that is given in the in the second paramater.


// setTimeout(function () {
//     count += 1;
//     console.log(count);
// }, 2000)     settimeOut do after the specific time that is given in the in the second paramater.

// let counter = document.querySelector("#count");
// let count = 0;
// let startInterval;
// function start() {
//     startInterval = setInterval(function () {
//         counter.innerHTML = count += 1;
//     }, 2000)

// }
// function stop() {
//     clearInterval(startInterval)
// }
// let hours = document.querySelector("#hour");
// let mintfield = document.querySelector("#mint");
// let second = document.querySelector("#seconds");
// let watchStart;
// let sec = 0;
// let mints = 0;
// let hour = 0;
// function start() {
//     if (!watchStart) {
//         watchStart = setInterval(function () {
//             sec += 1;
//             if (sec === 60) {
//                 sec = 0;
//                 mints += 1;
//             }
//             if (mints === 60) {
//                 mints = 0;
//                 hours += 1;
//             }
//             second.innerHTML = sec;
//             mintfield.innerHTML = mints;
//             hours.innerHTML = hour;

//         }, 1000);
//     }
// }
// function stop() {
//     clearInterval(watchStart)
//     watchStart = null;
// }
// function reset() {
//     stop();
//     sec = 0;
//     mints = 0;
//     hours = 0;
//     second.innerHTML = sec;
//     hour.innerHTML = hours;
//     mintfield.innerHTML = mints;
// }




// let sec = document.querySelector("#second");
// let mint = document.querySelector("#mint");
// let hour = document.querySelector("#hour");
// let second = 0;
// let mintField = 0;
// let hoursField = 0;
// let stopWatch = null;

// function start() {
//     if (!stopWatch) {
//         stopWatch = setInterval(function () {
//             second++;
//             if (second === 60) {
//                 second = 0;
//                 mintField++;
//             }
//             if (mintField === 60) {
//                 mintField = 0;
//                 hoursField++;
//             }
//             if (second < 10) {
//                 sec.innerHTML = `0${second}`
//             } else{
//                 sec.innerHTML = `${second}`

//             }
//             if (mintField < 10) {
//                 mint.innerHTML = `0${mintField}`
//             }
//             if (hoursField < 10) {
//                 hour.innerHTML = `0${hoursField}`
//             }
//         }, 1000)
//     }

// }

// function stop() {
//     clearInterval(stopWatch)
//     stopWatch = null;
// }
// function reset() {
//     stop();
//     second = 0;
//     hoursField = 0;
//     mintField = 0;
//     sec.innerHTML = "00";
//     mint.innerHTML = "00";
//     hour.innerHTML = "00";
// }





// let dateToday = new Date("2030-6-30")
// console.log(dateToday);
// let newDate = new Date(2030, 8, 20, 7, 34, 40, 5000)
// console.log(newDate);


// // let year = newDate.getFullYear();
// // console.log(year);

// let mont = newDate.getMonth();
// console.log(mont);

// let dat = newDate.getDate();
// console.log(dat);

// let hor = newDate.getHours();
// console.log(hor);

// let mint = newDate.getMinutes();
// console.log(mint);

// let sec = newDate.getSeconds();
// console.log(sec);

// let milisec = newDate.getMilliseconds();
// console.log(milisec);


// newDate.setHours(13);
// newDate.setMinutes(55);
// newDate.setFullYear(2015);
// newDate.setMonth(4);
// console.log(newDate);



//   watch 

// let hour = document.querySelector("#hour");
// let mint = document.querySelector("#mint");
// let second = document.querySelector("#second");
// let timeShift = document.querySelector("#timeShift");

// setInterval(function () {
//     let newDate = new Date();
//     let dateHours = newDate.getHours();
//     let dateMint = newDate.getMinutes();
//     let dateSec = newDate.getSeconds();
//     if (dateHours > 12) {
//         hour.innerHTML = dateHours - 12;
//         console.log(hour.innerHTML);
//         timeShift.innerHTML = "PM"
//     } else if(dateHours <= 12){
//         hour.innerHTML = `0${dateHours}`;

//     }

//     if (dateSec < 10) {
//         second.innerHTML = `0${dateSec}`
//     } else if (dateSec >= 10) {
//         second.innerHTML = `${dateSec}`
//     }
//     if (dateMint < 10) {
//         mint.innerHTML = `0${dateMint}`
//     } else if (dateMint >= 10) {
//         mint.innerHTML = `${dateMint}`
//     }
// }, 1000)


function Check() {
    let inputDate = document.querySelector("#birthDay");
    let result = document.querySelector("#result");
    if (!inputDate.value) {
        alert("Please provide the Date of Birth")
        return;
    }
    let newDate = new Date(inputDate.value);
    let currentDate = new Date();
    if (newDate > currentDate) {
        alert("birth Date is not larger than current Date");
        return;
    }

    let birthYear = currentDate.getFullYear() - newDate.getFullYear();
    let birthMonth = (currentDate.getMonth() - newDate.getMonth());
    let birthDate = currentDate.getDate() - newDate.getDate();
    // let ageYear = Math.floor(birthDay / 1000 / 60 / 60 / 24 / 365);

    if (birthDate < 0) {
        birthMonth -= 1;
        let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        birthDate += previousMonth;
    }
    if (birthMonth < 0) {
        birthYear -= 1;
        birthMonth += 12;
    }


    result.innerHTML = `Your age is ${birthYear} Years , ${birthMonth} Months , ${birthDate} Days`
    result.style.fontFamily = "Arial, sans-serif";

        inputDate.value = ""


}


// let userInfo = {
//     name : "Abdullah",
//     email: "abdullah00119@gmail.com",
//     age: 20,
//     greetUser: function(){
//         return `${this.firstName} ${this.LastName}`
//     },
// }
// userInfo.firstName = "Abdullah";
// userInfo.LastName = "Awan";
// delete userInfo.name;
//  var a = userInfo.greetUser()
//  console.log(a);
//  console.log(userInfo);

// function submit() {
//     let userInfo = {}
//     userInfo.userName = document.querySelector("#name").value;
//     userInfo.userEmail = document.querySelector("#email").value;
//     userInfo.userAge = document.querySelector("#age").value;
//     userInfo.userCity = document.querySelector("#city").value;

//     console.log(userInfo);
// }






