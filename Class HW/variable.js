let full_name, empty, ud, pi, dark_mode;
full_name = "Abin Jacob";
empty = null;
dark_mode = true;
console.log(full_name, empty, ud, dark_mode);

// 4.
const programming_languages = "javascript, python, java, c++"
console.log(programming_languages.includes("script"));

// 5. Split the string into an array using split() method
const programming_languages_array = programming_languages.split(",");
console.log(programming_languages_array);

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", ");
console.log(companies);

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
console.log([1, 2, 3, 4, 5, 5, 7, 5, 7, 8].lastIndexOf(5));

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
console.log('You cannot end a sentence with because because because is a conjunction'.search("because"));
// search returns position of the word

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
" hello world ".trim();

// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.
// false
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(0));
// all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
// truth
console.log(Boolean("a"));
console.log(Boolean(1));
console.log(Boolean([]));

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true
//     - 4 >= 3 false
//     - 4 < 3 false
//     - 4 <= 3 false
//     - 4 == 4 true
//     - 4 === 4 true
//     - 4 != 4 false
//     - 4 !== 4 false
//     - 4 != '4' false
//     - 4 == '4' true
//     - 4 === '4' false
// - Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length > "jargon".length);

// 12. Use the Date object to do the following activities
const current_date = new Date();
//     - What is the year today?
console.log(current_date.getFullYear());
//     - What is the month today as a number?
console.log(current_date.getMonth() + 1);
//     - What is the date today?
console.log(current_date.getDate());
//     - What is the day today as a number?
console.log(current_date.getDate());
//     - What is the hours now?
console.log(current_date.getHours());
//     - What is the minutes now?
console.log(current_date.getMinutes());
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(current_date.getTime() / 1000));


// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });


// readline.question(`Enter the base and height separated by comma?`, input => {
//     console.log(`Hi you triangle's area is ${0.5 * input.split(",").reduce((p, c) => p * c)}!`);
//     readline.close();
// });

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log(((10 - 2) / (6 - 2)));

// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// readline.question("Enter the radius : ", radius => {console.log(`Area of the circle is ${(2 * Math.PI * radius)}`);
// readline.close()});

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
console.log(current_date.toISOString().split("T")[0], `${current_date.getHours()}:${current_date.getMinutes()}`)
//     - DD-MM-YYYY HH:mm
console.log(current_date.toLocaleString().replace(/\//g, "-").split(",")[0], `${current_date.getHours()}:${current_date.getMinutes()}`)
//     - DD/MM/YYYY HH:mm
console.log(current_date.toLocaleDateString(), `${current_date.getHours()}:${current_date.getMinutes()}`);

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let age = prompt("Enter your age: ");
// if (age >= 18){
//     alert("Your are old enough to drive");
// }else{
//     alert(`Please wait for ${18-age} years for driving.`)
// };

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// const number1 = prompt("Enter a number: ");
// const is_even = number1 % 2 === 0 ? "is even" : "not even";
// alert(is_even);

// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
// const user_grade = prompt("Enter your grade : ");
// switch(true){
//     case (Number(user_grade) >= 90): 
//         alert("A");
//         break
//     case (Number(user_grade) >= 70): 
//         alert("B");
//         break
//     case (Number(user_grade) >= 60): 
//         alert("C");
//         break
//     case (Number(user_grade) >= 50): 
//         alert("D");
//         break
//     case (Number(user_grade) >= 0): 
//         alert("F");
//         break
//     default:
//         alert("Enter proper value");

// }


// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
// const month_input = prompt("Enter month : ");
// switch(true){
//     case ("September, October, November".split(", ").includes(month_input)):
//         alert("Season is Autumn");
//         break;
//     case ("December, January, February".split(", ").includes(month_input)):
//         alert("Season is Winter");
//         break;
//     case ("March, April, May".split(", ").includes(month_input)):
//         alert("Season is Spring");
//         break;
//     case ("June, July, August".split(", ").includes(month_input)):
//         alert("Season is Summer");
//         break;
//     default:
//         alert("Please enter proper value");
//         break;
// }

// 22. Write a program which tells the number of days in a month.
// 23. Write a program which tells the number of days in a month, now consider leap year.

// const month_input = prompt("Enter year and month seperated by - : ");
// function getNumberOfDays(inputs){
//     const mon = new Date(Number(inputs[0]), Number(inputs[1]), 0);
//     console.log(mon.toDateString())
//     return mon.getDate();
// }
// alert(`Number of days : ${getNumberOfDays(month_input.split("-"))}`);

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");
// console.log(shoppingCart);
// if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");
// console.log(shoppingCart);
// const is_alergic_to_honey = prompt("Are you alergic to honey?[Y/N]")
// if (is_alergic_to_honey.toLowerCase().includes("y")) shoppingCart.splice(shoppingCart.indexOf("Honey"),1);
// console.log(shoppingCart);
// if (shoppingCart.indexOf("Tea") > -1) shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
// console.log(shoppingCart);

// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min_age = Math.min(...ages);
const max_age = Math.max(...ages);
console.log("Min Age :",Math.min(...ages));
console.log("Max Age :",Math.max(...ages));
const median = ages.length % 2 == 0 ? (ages[Math.floor(ages.length/2)]+ ages[Math.ceil(ages.length/2)])/2 : ages[Math.floor(ages.length/2)];
console.log("Median :",median);
const average = (ages.reduce((p,c)=>p+c))/ages.length;
console.log("Average :",average);
console.log("Range :", Math.max(...ages)-Math.min(...ages));
console.log(Math.abs((min_age-average),(max_age-average)));

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
const checkPrime = (num) => {
    if (num <= 1 ) return false;

    for (let i = 2; i < num; i++)
    if (num % i == 0) return false;

    return true;
}

for (let i = 0; i <= 100; i++){
    if (checkPrime(i)) console.log(i);
}

// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let odd_sum = 0;
let even_sum = 0;
for (let i = 0; i <= 100; i++){
    ( i % 2 ==0 ) ? even_sum += i : odd_sum += i;
    // process.stdout.write(`\rEven Sum : ${even_sum}`);
}
console.log(`Even Sum : ${even_sum}`);
console.log(`Odd Sum : ${odd_sum}`);

// 30. Write a script which generates a random hexadecimal number.
const rand_decimal = Math.floor(Math.random()*100)
console.log(rand_decimal," : ",rand_decimal.toString(16));

// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// let weight;
// readline.question('What is your height? ', (input) => {
//     // height = input;
//     let height =  input;
//     readline.close();
// });
// // readline.question("Enter your weight : ",(el) => {
// //     weight =  el;
// //     readline.close();
// // })
// // const bmi = weight / (height**2);
// console.log(height);

// 35. Write a functions which checks if all items are unique in the array.
function unique(arr){
   const freq =  arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
   console.log(Object.values(freq))
   return Math.max(...Object.values(freq)) === 1 ? true : false;
}
console.log(unique([1,2]));
console.log(unique([1,2,2]));