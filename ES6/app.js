// const outerFun = () => {
//     let outerVar = "outer";
//     const innerFun = () => {
//         let innerVar = "inner";
//         console.log(outerVar);
//     }
//     return innerFun;
// }
// outerFun()()
// let Funcall = outerFun();
// Funcall()

// const parentFun = () => {
//     let parentVar = "ParentOne";
//     const childOne = () => {
//         let childOneVar = "ChildernOne";
//         // console.log(childTwoVar);
//         console.log(parentVar);


//     }

//     const childTwo = () => {
//          let childTwoVar = "ChildTwo"
//         //  console.log(childOneVar);
//         console.log(parentVar);
//     }
//     childOne()
//     childTwo()
// }

// parentFun()


// IIFE Immediately Invoked Function Expression
// (function name(name){
//     console.log(`Your name is ${name}`);
// })("Abdullah")

// (()=>{
//     let name = "Abdullah";
//     console.log(name);
// })();
// console.log(name);           

// const result = (() => {
//     let number = 5;
//     return number ** 2;
// })();
// console.log(result);


// const user = {
//   name: "Alice",
//   age: 25,
//   email: "alice@example.com",
//   address : {city : "Quetta"},
//   isAdmin: false,
//   greet() {
//     console.log("Hello, " + this.name + "!");
//   }
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// Object.freeze(user);
// user.address.city = "Karachi"
// console.log(user);



// const data = {
//     name: "Abdullah",
//     location: {
//         province: "balochistan",
//         city: "Quetta",
//         street: "Abdali Colony"
//     }
// }
// console.log(data.location?.profile);
// console.log(data.location?.profile ?? "Unknown");


// Destructuring (object , array)
// const user = {
//   name: "Alice",
//   age: 25,
//   email: "alice@example.com",
//   isAdmin: false
// };
// const {name , age:umer , email, isAdmin} = user
// console.log(umer);
// console.log(name);
// console.log(isAdmin);


// const fellows = ["Abdullah" , "Bakht" , "Maheen" , "Farhan"];
// console.log(fellows);
// const [first , second ,  , fourth] = fellows
// console.log(fourth);


// const user = {
//   name: "Abdullah",
//   address: {
//     city: "Quetta",
//     country: "Pakistan"
//   }
// };
// console.log(user.address?.country);
// const {name  , address :{city, country}} = user;
// console.log(city);

// const user = { name: "Abdullah", age: 20, qualification: "UnderGraduate" };
// function userFun({name , qualification}) {
//     console.log(`User name is ${name}, and he is ${qualification}`);
// }
// userFun(user)


// Default parameters

// const dePara = (userName = "Abdullah") => {
//    console.log(userName);
// }
// dePara()

// function sum(a = 2, b = 3) {
//     return a + b;
// }
// console.log(sum());
// console.log(sum(10));
// console.log(sum(10,20));

// Rest parameter

// const resPara = (...names) => {
//     console.log(names);
// }
// resPara("Abdullah" , {age:20} , ["Quetta"] , true)

// function mix(fir, sec,thir, ...fourth){
//     console.log(fir);
//     console.log(sec);
//     console.log(thir);
//     console.log(fourth);
// }
// mix(10, 11,12,13,14,15)


// const sumAll = (...number) => {
//     return number.reduce((acc, cval) => acc + cval, 0)
// }
// console.log(sumAll(1, 2, 3, 4, 5, 10, 5));



// Spread Operator

// const userName = ["Abdullah" , "Rashid Hussain" , "AbdulBari"]
// console.log(...userName);
// const number = [1,2,3,4,5,6];
// console.log(...number);
// const mixItems = ["Abdullah" , 123 , true , null];
// console.log(...mixItems);









