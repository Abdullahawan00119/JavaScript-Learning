// ️ Basic Interactions


// 1. Click to Change Background
// When a button is clicked, change the background color of the entire page to a random
// color.



// btn.addEventListener("click", () => {
//     const btn = document.querySelector("#btn");
//     const colorInput = document.querySelector("#colorInput");
//     let color = document.querySelector("body");
//     color.style.background = colorInput.value;
// })

// const testing = () => {
//       console.log("refrence");
// }

// const btn = document.querySelector("#btn");
// btn.addEventListener("click" , testing);

// const inputChange = document.querySelector("#inputChange");
// inputChange.addEventListener("input" , ()=>{
//     console.log(inputChange.value);
// })



// 2. Toggle Light Mode / Dark Mode
// Add a button that toggles between light and dark themes using class changes.

// const body = document.querySelector("#light");
// const btnToogle = document.querySelector("#btnToogle");
// btnToogle.addEventListener("click", () => {

//     body.classList.toggle("dark")
//     if (body.classList.contains("dark")) {
//         btnToogle.innerHTML = "Dark Mode 🌙";
//     } else {
//         btnToogle.innerHTML = "Light Mode ☀️";
//     }
// })

// bubbling is the in which fisrt child is targeted then it parent 
// like <div id="Parent">  <div id="chid" ></div>    </div >


// Capturing is a concept in which first parent is targeted the its child  for this we pass true to parent 


// const parent = document.querySelector("#Parent");
// const child = document.querySelector("#child");

// parent.addEventListener("click", () => {
//   console.log("Parent Clicked");

// }, true)

// child.addEventListener("click" , ()=>{
//     console.log("Child Clicked");

// })

// const ul = document.querySelector(".images");
// const image1 = document.querySelector("#image-1");
// const Link = document.querySelector("#link-1");
// ul.addEventListener("click", () => {
//     console.log("ul is clicked");

// })
// image1.addEventListener("click", (event) => {
//     // console.log(event.target);
//     console.log("Image1 Clicked");
//     event.stopPropagation()

// })
// Link.addEventListener("click", (event) => {
//     console.log("link is Clicked");
//     event.stopPropagation();   // stop excecuting the parent one
//     event.preventDefault()    // stop it from refresh and moving to next tab 

// })


// ul.addEventListener("click", (event) => {
//     //  console.log(event.target.tagName , "tag Name");    // it gives the tag name 
//     //  console.log(event.target.parentNode);   //  it gives the complete element 
//     // if(event.target.tagName === "IMG"){
//     //     event.target.parentNode.remove()
//     //     return
//     // }

// })


// const form = document.querySelector("#formInputs");
// const Fullname = document.querySelector("#Fname");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const formRegix = {
//     nameRegix: /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/,
//     emailRegix: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     passwordRegix: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// }
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     if (!formRegix.nameRegix.test(Fullname.value)) {
//         return alert("Write Full name!")
//     }
//     if (!formRegix.emailRegix.test(email.value)) {
//         return alert("Write email!")
//     }
//     if (!formRegix.passwordRegix.test(password.value)) {
//         return alert("write Stronge Password!")
//     }

//     console.log(Fullname.value);
//     console.log(email.value);
//     console.log(password.value);

// })


// 2. Toggle Light Mode / Dark Mode
// Add a button that toggles between light and dark themes using class changes.

// const toggleMode = document.querySelector("#toggleMode");
// const body = document.querySelector("#light");
// toggleMode.addEventListener("click", () => {
//     body.classList.toggle("dark");
//     if(body.classList.contains("dark")){
//         toggleMode.innerHTML = "Dark"
//     } else{
//         toggleMode.innerHTML = "Light"
//     }
// })

// 3. Hide Element on Click
// When a specific element is clicked, hide it from view using style.display =
// 'none'.


// const display = document.querySelector("#display");
// const Para = document.querySelector("#Para");
// display.addEventListener("click", () => {
//     if (Para.style.display === 'none') {
//         Para.style.display = "block"
//         display.innerHTML = "hide"
//     } else {
//         Para.style.display = "none"
//         display.innerHTML = "show"

//     }
// })



// 4. Counter with Buttons
// Create "Increase" and "Decrease" buttons that modify a number displayed on the
// screen.

// const increment = document.querySelector("#increment");
// const decrement = document.querySelector("#decrement");
// const display = document.querySelector("#display");
// let counter = 0;
// display.innerHTML = counter
// increment.addEventListener("click", () => {
//     counter++
//     display.innerHTML = counter
// })
// decrement.addEventListener("click", () => {
//     if(counter === 0){
//         alert("not below then 0")
//         return
//     }
//   counter--
//   display.innerHTML = counter

// })


// 5. Disable Button After Click
// Create a button that disables itself after being clicked once.
// const disable = document.querySelector("#disable");
// disable.addEventListener("click", () => {
//           disable.disabled = true
//           disable.innerHTML = "Disabled"
// })


// 6. Live Character Count
// Display how many characters have been typed into a textarea in real time.

// const TextArea = document.querySelector("#TextArea");
// TextArea.addEventListener("input", () => {
//     let counter = TextArea.value.trim().length;
//     console.log(counter);
// })

// 7. Password Strength Checker
// Show strength feedback ("Weak", "Strong") as the user types a password.
// const password = document.querySelector("#password");
// const check = document.querySelector("#check");
// const Regix = {
//     veryWeak: /^.{0,5}$/,
//     weak: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
//     strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// }
// check.addEventListener("click", () => {
//     if (Regix.veryWeak.test(password.value)) {
//         return console.log("very weak password");
//     }
//     if (Regix.weak.test(password.value)) {
//         return console.log("weak");
//     }
//     if (Regix.strong.test(password.value)) {
//         return console.log("strong");
//     }

// })

// 8. Enter to Submit
// When the user presses Enter inside an input field, submit the form (or show an alert).

// const formInputs = document.querySelector("#formInputs");
// const name = document.querySelector("#name");
// const phone = document.querySelector("#number");
// formInputs.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(name.value);
//     console.log(number.value);
// })

// 9. Auto Uppercase Input
// As the user types in a text field, convert the characters to uppercase live.

// const TextInput = document.querySelector("#TextInput");
// TextInput.addEventListener("input", (event) => {
//     console.log(TextInput.value.toUpperCase());
// })

// 10. Detect Forbidden Words
// Prevent form submission if input contains banned words (like "spam", "test").

// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const textInput = document.querySelector("#textInput");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // const inputArray = textInput.value.split(" ")
//     if(textInput.value.includes("spam")){
//         return console.log("include the spam");
//     }
//     console.log(textInput.value);
// })


// 12. Form Validation on Submit
// Validate all fields (e.g., name, email) when the form is submitted. Show inline error
// messages.

// const form = document.querySelector("#Form");
// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const userPhone = document.querySelector("#userPhone");
// const Gender = document.querySelector("#Gender");
// const userEmail = document.querySelector("#userEmail");

// errors = {
//     firstNameError: document.querySelector("#firstNameError"),
//     lastNameError: document.querySelector("#lastNameError"),
//     emailError: document.querySelector("#emailError"),
//     phoneError: document.querySelector("#phoneError"),
//     passwordError: document.querySelector("#passwordError"),
//     termConditionError: document.querySelector("#termConditionError")
// }

// const regex = {
//     firstName: /^[A-Za-z]{3,30}$/,
//     lastName: /^[A-Za-z]{3,30}$/,
//     email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     phone: /^\+?[0-9]{10,15}$/,
//     strongPassword: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/
// };
// const icon = document.querySelector("#icon");
// const password = document.querySelector("#userPassword");
// icon.addEventListener("click", () => {
//     if (password.type === "password") {
//         password.type = "text";
//         icon.classList.remove("fa-eye");
//         icon.classList.add("fa-eye-slash");
//     } else {
//         password.type = "password";
//         icon.classList.remove("fa-eye-slash")
//         icon.classList.add("fa-eye")
//     }
// })
// const passwordRegix = [
//     { pssrigix: /^.{0,5}$/, show: "Too short" },
//     { pssrigix: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/, show: "Strong" },
//     { pssrigix: /^(?=.{6,})(?=.*[A-Za-z])(?=.*\d).*$/, show: "Medium" }

// ]
// password.addEventListener("input", () => {
//     if (password.value.length === 0) {
//         icon.style.display = "none"
//     } else {
//         icon.style.display = "inline"
//     }
//     errors.passwordError.innerHTML = "";
//     const matched = passwordRegix.find(item => item.pssrigix.test(password.value))
//     if (matched) {
//         errors.passwordError.innerHTML = matched.show;
//     } else {
//         errors.passwordError.innerHTML = ""
//     }

// })
// const termCondition = document.querySelector("#termCondition");
// const submitBtn = document.querySelector("#submitBtn");

// const userDataSubmit = {}
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let userValid = true;
//     //     15. Checkbox Agreement
//     // Disable the "Submit" button unless a "Terms and Conditions" checkbox is checked.
//     termCondition.addEventListener("input", () => {
//         if (!termCondition.checked) {
//             errors.termConditionError.innerHTML = "Check the terms and Condition before submitting the form"
//             submitBtn.disabled = true
//         } else {
//             errors.termConditionError.innerHTML = "";
//             submitBtn.disabled = false
//         }
//     })

//     if (!termCondition.checked) {
//         errors.termConditionError.innerHTML = "Check the terms and Condition before submitting the form"
//         submitBtn.disabled = true
//         userValid = false

//     } else {
//         errors.termConditionError.innerHTML = "";
//         submitBtn.disabled = false
//     }
//     if (!regex.firstName.test(firstName.value)) {
//         errors.firstNameError.innerHTML = "First name must be 2–30 letters ";
//         userValid = false;
//     } else {
//         errors.firstNameError.innerHTML = ""
//     }
//     if (!regex.lastName.test(lastName.value)) {
//         errors.lastNameError.innerHTML = "Last name must be 2–30 letters "
//         userValid = false
//     } else {
//         errors.lastNameError.innerHTML = ""
//     }

//     if (!regex.email.test(userEmail.value)) {
//         errors.emailError.innerHTML = "Enter the Valid Email Address!"
//         userValid = false
//     } else {
//         errors.emailError.innerHTML = ""
//     }

//     if (!regex.phone.test(userPhone.value)) {
//         errors.phoneError.innerHTML = "Enter a valid phone number!"
//         userValid = false
//     } else {
//         errors.phoneError.innerHTML = ""
//     }
//     if (!regex.strongPassword.test(password.value)) {
//         errors.passwordError.innerHTML = "Enter a Strong Password!"
//         userValid = false
//     } else {
//         errors.passwordError.innerHTML = ""
//     }
//     const Gender = document.querySelector("#Gender");
//     const selectedValue = Gender.value;
//     if (userValid) {
//         userDataSubmit.firstName = firstName.value;
//         userDataSubmit.lastName = lastName.value;
//         userDataSubmit.email = userEmail.value;
//         userDataSubmit.phone = userPhone.value;
//         userDataSubmit.password = password.value;
//         console.log(userDataSubmit);
//         swal.fire("Good job!", "Form Submitted Successfully!", "success")
//         password.value = ""
//         userEmail.value = ""
//         userPhone.value = ""
//         firstName.value = ""
//         lastName.value = ""
//         password.value = ""
//         Gender.value = ""
//     }
// })


// 13. Show/Hide Password
// Toggle password visibility with a checkbox or icon (eye icon behavior).

// const icon = document.querySelector("#icon");
// const password = document.querySelector("#password");
// icon.classList.toggle("fa-regularfa-eye")
// icon.addEventListener("click", () => {
//     if (password.type === "password") {
//         password.type = "text";
//         icon.classList.remove("fa-eye")
//         icon.classList.add("fa-eye-slash")
//     } else {
//         password.type = "password";
//         icon.classList.remove("fa-eye-slash")
//         icon.classList.add("fa-eye")
//     }

// })


// 14. Color Picker Live Preview
// Use an <input type="color"> to change the background color of a preview box
// live.

// const colorInput = document.querySelector("#colorInput");
// const previewBox = document.querySelector("#previewBox");
// colorInput.addEventListener("input", () => {
//     previewBox.style.backgroundColor = colorInput.value
//     previewBox.style.width = "300px"
// })


// 16. Image Hover Preview
// Show a larger preview of an image when hovering over a thumbnail using mouseover  and mouseout.
// const img = document.querySelector("#img");
// img.addEventListener("mouseover", () => {
//     img.style.width = "500px"
// })
// img.addEventListener("mouseout", () => {
//     img.style.width = ""
// })




// 17. Scroll to Reveal Button
// Display a "Back to Top" button only when the user scrolls down 300px or more.


// const scrollTop = document.querySelector("#scrollTop");
// window.addEventListener("scroll", () => {
//     if (window.scrollY < 300) {
//         scrollTop.style.display = "none"
//         console.log("scrool kam ha");
//     } else {
//         scrollTop.style.display = "inline"
//         console.log("Scroll ho gia ha");

//     }
// })
// scrollTop.addEventListener("click", () => {
//       window.scrollTo({
//         top : 0 , behavior: "smooth"
//       })
// })



// 18. Form Auto Save
// Save form inputs to localStorage as the user types and restore them on reload.

// const form = document.querySelector("#form");
// const formName = document.querySelector("#name");
// const formPhone = document.querySelector("#phone");
// const submitForm = document.querySelector("#submit");
// form.addEventListener("input", () => {

//     const formInputs = {
//         name: formName.value,
//         phone: formPhone.value
//     }
//     const storevalues = localStorage.setItem("Form", JSON.stringify(formInputs));
//     console.log(formInputs, "during input typing store");
// })
// window.addEventListener("DOMContentLoaded", () => {
//     const formSave = JSON.parse(localStorage.getItem("Form")) || ""
//     formName.value = formSave.name || ""
//     formPhone.value = formSave.phone || ""
// })
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     localStorage.removeItem("Form")
//     formName.value = ""
//     formPhone.value = ""
// })


// 19. Click Outside
//  closes when clicking anywhere outside of it.
// const openModal = document.querySelector("#openModal");
// const overlay = document.querySelector("#overlay");
// const closeBtn = document.querySelector("#closeBtn");
// openModal.addEventListener("click", () => {
//     overlay.classList.remove("hidden")
//     overlay.classList.add("flex")
// })
// const closeModal = () => {
//     overlay.classList.remove("flex")
//     overlay.classList.add("hidden")
// }
// overlay.addEventListener("click", (event) => {
//     if (event.target === overlay) {
//         closeModal()
//     }
// })
// closeBtn.addEventListener("click", () => {
//     closeModal()
// })
// closeBtn.addEventListener("click", () => {
//     closeModal()
// })
