
// Array length property
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.length);

// Array methods

// push
const students = ['Arun', 'Alen', 'Sumit'];
students.push('Bipin'); 
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin' ]
students.push('Kelvin', 'Ivan');
console.log(students); // [ 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan' ]

// unshift
students.unshift('Abhilash', 'Abin');
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin', 'Ivan']

// pop
students.pop();
console.log(students); // ['Abhilash', 'Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']

//  shift
students.shift()
console.log(students); // ['Abin', 'Arun', 'Alen', 'Sumit', 'Bipin', 'Kelvin']