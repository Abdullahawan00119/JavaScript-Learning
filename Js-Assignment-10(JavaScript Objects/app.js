// 🔁 Logic-Based (Objects + Arrays + Loops)

// 1. Display Student Info
// Given an array of student objects, display each student’s name and marks in a table
// using DOM.

// function show() {


//     let studentInfo = [
//         {
//             name: "Abdullah",
//             marks: 100
//         },
//         {
//             name: "ALi",
//             marks: 80
//         },
//         {
//             name: "Humza",
//             marks: 40
//         },
//         {
//             name: "Muzamil",
//             marks: 61
//         },
//         {
//             name: "Huzafa",
//             marks: 55
//         }
//     ]
//     for (let i = 0; i < studentInfo.length; i++) {
//         document.querySelector("table").innerHTML += `<tr> <th>Student Names</th> <th>Marks</th>
//     </tr>
//      <tr><td> name is ${studentInfo[i].name} </td>
//      <td> ${studentInfo[i].marks}</td></tr>`;

//     }
// }


// 2. Find Top Scorer
// From a list of student objects with names and scores, find and display the top scorer.

// let studentInfo = [
//     {
//         name: "Abdullah",
//         marks: 200
//     },
//     {
//         name: "ALi",
//         marks: 500
//     },
//     {
//         name: "Humza",
//         marks: 100
//     },
//     {
//         name: "Muzamil",
//         marks: 61
//     },
//     {
//         name: "Huzaifa",
//         marks: 55
//     }
// ]
// let greatestScore = studentInfo[0].marks;


// for (let i = 0; i < studentInfo.length; i++) {
//     if (studentInfo[i].marks > greatestScore) {
//         greatestScore = studentInfo[i].marks;
//         break;
//     } else {
//         console.log("no");

//     }
// }
// console.log(greatestScore);

// let result = document.querySelector("#result");
// result.innerHTML = `The student has got the highest ${greatestScore}`




// 3. Filter Products by Price Range
// Create a function that takes a min and max price and filters an array of product objects
// accordingly.

// function check() {
//     let productArrayObject = [
//         {
//             name: "Bag",
//             price: 2000
//         },
//         {
//             name: "Laptop",
//             price: 50000
//         },
//         {
//             name: "CPU",
//             price: 10000
//         },
//         {
//             name: "Mobile",
//             price: 6500
//         },
//         {
//             name: "Mouse",
//             price: 550
//         },
//         {
//             name: "KeyBoard",
//             price: 1050
//         }, {
//             name: "Protector",
//             price: 400
//         }, {
//             name: "USB",
//             price: 1000
//         }
//     ]
//     let price = document.querySelector("#price");
//     let result = document.querySelector("#result");
//     let numPrice = parseInt(price.value);
//     let filtered = [];

//     let filterSource = productArrayObject[0].price;
//     for (let i = 0; i < productArrayObject.length; i++) {
//         if (productArrayObject[i].price <= numPrice) {
//             filterSource = `${productArrayObject[i].name} :  ${productArrayObject[i].price} <br/> `;
//             filtered.push(filterSource)
//         }
//     }
//     if (filtered.length === 0) {
//         alert("Not have that price range");
//     } else {
//         result.innerHTML = `<p class="para">Products under your budget: ${filtered} </p>`;

//     }
// }


// 4. Count Word Frequencies
// Given a paragraph from a textarea, count the frequency of each word and display it as a
// list.

// function check() {
//     let textArea = document.querySelector("#textArea");
//     textAreaValue = textArea.value.trim();
//     if (!textAreaValue) {
//         return alert("Enter the text")
//     }
//     let wordsArray = textAreaValue.split(" ");
//     let wordCount = {};
//     for (let i = 0; i < wordsArray.length; i++) {
//         let words = wordsArray[i].toLowerCase();
//         if (wordCount[words]) {
//             wordCount[words] += 1;
//         } else {
//             wordCount[words] = 1;
//         }
//     }
//     console.log(wordCount);
//     let list = document.querySelector("#list");
//     for (let words in wordCount) {
//         list.innerHTML += `<li>${words} ${wordCount[words]} </li>`
//     }

//     textArea.value = " ";
//     wordsArray = []

// }


// Given an array of user objects ({name, role}), group and display users under role
// headings.

// function check() {
//     let users = [
//         { name: "Abdullah", role: "CEO" },
//         { name: "Ali", role: "Admin" },
//         { name: "Rehman", role: "Designer" },
//         { name: "Alisha", role: "Admin" },
//         { name: "Maheen", role: "Designer" },
//         { name: "Shyan", role: "Editor" },
//         { name: "Rashid", role: "Technician" },
//         { name: "Rizwan", role: "Editor" },
//         { name: "Sadat", role: "Technician" }
//     ];
//     let rloeObject = {};
//     for (let i = 0; i < users.length; i++) {
//         if (!rloeObject[users[i].role]) {
//             rloeObject[users[i].role] = [];
//         }
//         rloeObject[users[i].role].push(users[i].name)
//     }
//     let resultDiv = document.getElementById("result");
// }


// 9. Calculate Cart Total
// Given an array of cart items ({name, price, quantity}), display a full cart with
// totals using DOM.

function productDetail(){
    window.location = "ProductDetailPage1.html"
}
function addCart(){
    window.location = "AddCart.html"
    
}