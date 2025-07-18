// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.
// var fruits = ["apple", "banana", "cherry"];
// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.
// var colors = ["red" , "blue" , "White" , "purple"];
// for(let i = 0; i < colors.length; i++){
//     var output = document.querySelector("#outPut");
//     output.innerHTML += colors[i] + "<br />"
// }

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 4. Use a while loop to print numbers from 5 to 1 in the console.
// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with ID names to show all names separated by commas.
// var names = ["Ali", "Sara", "Ahmed"];
// var result = ""
// for (let i = 0; i < names.length; i++) {
//     result += names[i]
//     if (i < names.length - 1) {
//         result += ", ";
//     }
// }
// document.querySelector("#namesOutput").innerHTML = result;


// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in  a paragraph with ID sum.
// var numbers = [5, 10, 15];
// var result = 0;
// for (let i = 0; i < numbers.length; i++) {
//     document.querySelector("#numberSum").innerHTML = result += numbers[i];
// }

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities.
// var cities = ["Karachi", "Lahore", "Quetta"];
// var result = "";
// for (let i = 0; i < cities.length; i++){
//     result += cities[i] + " , ";
//       document.querySelector("#cities").innerHTML = result
// }



// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.
// var numbers = [2, 3, 5, 2, 2];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === numbers[0]) {
//         console.log("All are Equal");
//     } else {
//         console.log("All are not Equal");

//     }
// }


// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or equal to the average of the array.
// var numbers = [5, 10, 15, 20, 25];
// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// var numAverage = sum / numbers.length;
// console.log(numAverage);

// var count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= numAverage) {
//         count++
//     }
// }
// console.log(count);


// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.

// var numbers = [5, 10, 15, 20, 25];
// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// var numAverage = sum / numbers.length;
// var count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= numAverage) {
//         count++
//     }
// }
// console.log(count);

// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.
// var numbers = [2, 4, 6, 8];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0){
//        console.log(`This number is even ${numbers[i]}`);

//     }
// }


// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.
// var numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 0) {
//           var swap = numbers[i];
//           numbers[i] = numbers[numbers.length - 1];  
//           numbers[numbers.length - 1] = swap;
//           break;
//     }
// }
// console.log(numbers);

// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero elements in a new array.
// var numbers = [0, 1, 0, 3, 0, 5];
// var nonZeroNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] !== 0){
//      nonZeroNumbers += numbers[i]
//   }
// }
// console.log(nonZeroNumbers);

// 34. Loop through an array of numbers and create a new array that only contains odd numbers.
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var oddNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 !== 0){
//       oddNumbers.push(numbers[i]) 
//   }
// }
// console.log(oddNumbers);


// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.
// var numbers = [0, -1, -5, 6, 8, -3];
// var count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         count++
//     }
// }
// console.log(count);


// 32. Create a loop that finds the difference between the largest and smallest numbers in an array [11, 4, 99, 2, 47].
// var numbers = [11, 4, 99, 2, 47];
// var greaterNumber = numbers[0];
// var lessNumber= numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > greaterNumber) {
//         greaterNumber = numbers[i]
//     } else if (numbers[i] < lessNumber) {
//         lessNumber = numbers[i]
//     }
// }
// console.log(greaterNumber - lessNumber);

// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.
var primeNumbers = [] ;
for (let i = 1; i <= 50; i++) {
if(i  0){
   primeNumbers.push(i);
}
}
console.log(primeNumbers);
