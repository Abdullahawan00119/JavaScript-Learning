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

// let Products = [
//   {
//     img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
//     discount: "50%",
//     category: "Fancy Outfit",
//     by: "by Fancy Brand",
//     afterPrice: 199.99,
//     beforePrice: 250
//   },
//   {
//     img: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
//     category: "Cool Outfit",
//     by: "by Cool Brand",
//     afterPrice: 29,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
//     category: "Nice Outfit",
//     by: "by Nice Brand",
//     afterPrice: 500,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
//     category: "Abdullah Outfit",
//     by: "by Abdullah Brand",
//     afterPrice: 300,
//   },
// ]

// let result = document.querySelector("#display");
// for (let i = 0; i < Products.length; i++) {
//   let display = ` <div>

//         <a  href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <img src=${Products[i].img} loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//         </a>

//         <div class="flex items-start justify-between gap-2 px-2">
//           <div class="flex flex-col">
//             <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">${Products[i].category}</a>
//             <span class="text-gray-500">${Products[i].by}</span>
//           </div>

//           <div class="flex flex-col items-end">
//             <span class="font-bold text-gray-600 lg:text-lg">$ ${Products[i].afterPrice}</span>
//           </div>
//           <button onclick="cart(${i})">Cart</button>
//         </div>
//       </div>`


//   result.innerHTML += display;

// }
// let cartArray = [];
// function cart(index) {
//   let productArray = Products[index];
//   // console.log(productArray);
//   cartArray.push(productArray);
//   console.log(cartArray);
// }
// function cartPage() {
//   localStorage.setItem("cartItems", JSON.stringify(cartArray));
//   window.location = "AddCart.html"
// }



// . Dynamic Form Inputs to Object  
// Create a form with name, email, and age.On submit, convert the input into an object 
// and show the result. 
// let name = document.querySelector("#name");
// let email = document.querySelector("#email");
// let age = document.querySelector("#age");
// let rejexValidation = {
//   fullName: /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/,
//   emailRegix: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
//   ageRegix: /^(1[89]|[2-3][0-9]|40)$/
// }
// let inputValue = {}
// function submit() {
//   // e.prevent.Default
//   if (!name.value && !email.value && !age.value) {
//     return Swal.fire("Please fill all the fields!")
//   }
//   if (!rejexValidation.fullName.test(name.value)) {
//     return Swal.fire("Invalid Age!", "Enter the Full Name.", "error")
//   }
//   if (!rejexValidation.emailRegix.test(email.value)) {
//     return Swal.fire("Invalid Age!", "Enter the valid Email.", "error")
//   }
//   if (!rejexValidation.ageRegix.test(age.value)) {
//     return Swal.fire("Invalid Age!", "Age must be between 18 to 40.", "error")
//   }
//   inputValue.name = name.value
//   inputValue.email = email.value
//   inputValue.age = age.value
//   console.log(inputValue);
//   Swal.fire("Success!", "Form submitted successfully.", "success");

//   name.value = ""
//   email.value = ""
//   age.value = ""
// }


//    14. Edit Object in List
// Display a list of users with "Edit" buttons. On click, allow editing and update the object
// and UI.
// let users = [
//   { user: "Abdullah" },
//   { user: "Abdul Rehman" },
//   { user: "Shyan" },
//   { user: "Rizwan" },
// ]



// let listUser = document.querySelector("#list");
// function render() {
//   listUser.innerHTML = ""
//   for (let i = 0; i < users.length; i++) {
//     let displayList = `
//     <ol class="list-decimal pl-6 space-y-5">
//       <li class="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 p-4 rounded-lg shadow">
//         <span class="font-medium text-gray-800 mb-2 sm:mb-0">${users[i].user}</span>
//         <div class="flex space-x-2 w-full sm:w-auto">
//           <button
//             onclick="edit(${i})"
//             class="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition w-full sm:w-auto">
//             Edit
//           </button>
//           <button
//             onclick="deleteUser(${i})"
//             class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition w-full sm:w-auto">
//             Delete
//           </button>
//         </div>
//       </li>
//     </ol>
//   `;

//     listUser.innerHTML += displayList;
//   }

// }
// render()
// function edit(index) {
//   let userUpdated = prompt("enter the Updated user Name");
//   users[index].user = userUpdated;
//   render()
// }

// function deleteUser(index) {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "This user will be deleted permanently!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, delete it!",
//     cancelButtonText: "Cancel"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       users.splice(index, 1);   // delete from array
//       render();                 // re-render list
//       Swal.fire("Deleted!", "The user has been removed.", "success");
//     }
//   });
// }


// function deleteAll() {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "All user will be deleted permanently!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, delete all!",
//     cancelButtonText: "Cancel"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       users = []
//       console.log(users);
//       render();
//       Swal.fire("Deleted!", "The user has been removed.", "success");
//       if (users.length === 0) {
//         document.querySelector("#deleteBtn").style.display = "none";
//       } else {
//         document.querySelector("#deleteBtn").style.display = "inline-block";
//       }
//     }
//   });
// }



// 6. Frequency of Characters  
// Take an input string, count character frequencies using an object, and display results.  
// let textInput = document.querySelector("#textInput");
// function frequency() {
//   let inputArray = textInput.value.split("")
//   let fre = {}
//   for (let i = 0; i < inputArray.length; i++) {
//     let letters = inputArray[i].toLowerCase();
//     if (fre[letters]) {
//       console.log("include ha ");
//       fre[letters] += 1;
//     } else {
//       fre[letters] = 1;
//     }
//   }
//   console.log(fre);
// }





